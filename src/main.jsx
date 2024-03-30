import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./Context/ThemeContext.jsx";
import { DataProvider } from "./Context/DataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <ThemeProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </DataProvider>
);
