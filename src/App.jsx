import { useAuth } from "@/hooks/useAuth";
import Content from "@/pages/Content";
import Dashboard from "@/pages/Dashboard.jsx";
import Landing from "@/pages/Landing";
import Login from "@/pages/auth/Login.jsx";
import * as React from "react";
import {
    BrowserRouter,
    Navigate,
    Outlet,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";

function ProtectedRoute({ children, ...props }) {
    const { isAuthenticated } = useAuth();
    const location = useLocation();
    if (isAuthenticated) {
        return <Outlet />;
    } else {
        let nextPage = location.pathname || "/";
        return <Navigate to={`/login?next=${nextPage}`} />;
    }
}

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="login/" element={<Login />} />
                <Route path="learn" element={<ProtectedRoute />}>
                    <Route path="/learn/" element={<Dashboard />} />
                    <Route path="/learn/content" element={<Content />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
