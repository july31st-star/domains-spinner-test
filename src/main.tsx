import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import App from "./App";
import "./custom.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider i18n={enTranslations}>
      <App />
    </AppProvider>
  </React.StrictMode>
);
