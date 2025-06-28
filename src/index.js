import "./global.css";
import { App } from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "store";
// importation du composant PersistGate pour recevoir nos donnée persiste du store
import { PersistGate } from "redux-persist/integration/react";

// importation des données persiste depuis le store
import { persistor } from "store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
