import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { AuthProvider } from "./hooks/useAuth.jsx";
import { ContentProvider } from "./hooks/useContent.jsx";
import { ThemeProvider } from "./hooks/useTheme.jsx";

axios.defaults.baseURL = "https://api.capitalizelearn.com/v1"
// axios.defaults.baseURL = "http://127.0.0.1:8000/v1"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <ThemeProvider>
                <ContentProvider>
                    <App />
                </ContentProvider>
            </ThemeProvider>
        </AuthProvider>
    </React.StrictMode>
);
