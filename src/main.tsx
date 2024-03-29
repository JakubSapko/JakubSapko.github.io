import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import { ThemeContextProvider } from "./context/ThemeContext";
import "./styles.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeContextProvider>
            <App />
        </ThemeContextProvider>
    </React.StrictMode>
);
