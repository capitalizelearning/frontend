import { useAuth } from "@/hooks/useAuth";
import About from "@/pages/About";
import ContactUs from "@/pages/ContactUs.jsx";
import Content from "@/pages/Content";
import Dashboard from "@/pages/Dashboard";
import Features from "@/pages/Features";
import Landing from "@/pages/Landing";
import Login from "@/pages/auth/Login";
import {
    BrowserRouter,
    Navigate,
    Outlet,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";

function ProtectedRoute() {
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
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/about" element={<About />} />
                <Route path="/features" element={<Features />} />
                <Route path="/login" element={<Login />} />
                <Route path="/learn" element={<ProtectedRoute />}>
                    <Route path="/learn/" element={<Dashboard />} />
                    <Route path="/learn/content/" element={<Content />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
