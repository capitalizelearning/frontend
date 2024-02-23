import { useAuth } from "@/hooks/useAuth";
import ContactUs from "@/pages/ContactUs.jsx";
import Landing from "@/pages/Landing";
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
                <Route path="contact" element={<ContactUs />} />
                {/* <Route path="login/" element={<Login />} />
                <Route path="learn" element={<ProtectedRoute />}>
                    <Route path="/learn/" element={<Dashboard />} />
                    <Route path="/learn/content" element={<Content />} />
                </Route> */}
            </Routes>
        </BrowserRouter>
    );
}
