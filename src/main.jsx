import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { AuthProvider } from "./hooks/useAuth.jsx";
import { ContentProvider } from "./hooks/useContent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <ContentProvider>
                <App />
            </ContentProvider>
        </AuthProvider>
    </React.StrictMode>
);
