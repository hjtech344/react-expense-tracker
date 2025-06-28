import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { addExpense, incrementActionCountPerformed, setIncome } from "store/expense/expense-slice";

// creation du middleware logger
export const loggerMiddleware = createListenerMiddleware();

// mise en ecoute du middleware logger
loggerMiddleware.startListening({
    // Action qu'on veut ecouter
    // predicate : (action) => {
    //   return action.type === 'addExpense';
    // },
    
    // methode plus courte
    matcher : isAnyOf(addExpense, setIncome),
    
    // le truc qu'on va faire quand une action est appeler
    effect : async (action, listenerAPI) => {
       console.log("action effect : ",action)
       // dispatcher l'action incremetActionCountPerformed a chaque fois une action de matcher est appeler    
       listenerAPI.dispatch(incrementActionCountPerformed());
       console.log("etat du store apres l'action : ", listenerAPI.getState())
    }
})

