import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer,
    FLUSH, 
    REHYDRATE, 
    PAUSE, 
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";  
import storage from 'redux-persist/lib/storage';
import { loggerMiddleware } from "./middleware/logger.middleware";

// Combiner nos reducers
const rootReducers = combineReducers({
    EXPENSE : expenseSlice.reducer,
});

// objet de configuration de nos données
const persistConfig = {
  key : "root",
  version : 1,
  storage,
  //   whitelist : ["EXPENSE"]
}

// Persister nos reducers
const persistedReducers = persistReducer(persistConfig, rootReducers);

// Envoie des données persister 
const store = configureStore({
    reducer : persistedReducers,
    
    // ignorer les actions de type dispatch et ajout du middleware loggerMiddleware 
    middleware : (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck : {
              ignoredActions : [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ]
            }
        }).prepend(loggerMiddleware.middleware)
    }
    
})

// creation de la variable qui nous donnent acces a nos données persiste ou store dans nos composant
const persistor = persistStore(store)

export { store, persistor }