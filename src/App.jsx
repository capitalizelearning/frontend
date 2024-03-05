// import { useAuth } from "@/hooks/useAuth";
import About from "@/pages/About";
import ContactUs from "@/pages/ContactUs.jsx";
import Content from "@/pages/Content";
import Dashboard from "@/pages/Dashboard";
import Features from "@/pages/Features";
import Landing from "@/pages/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard2 from "./pages/Dashboard/Dashboard";
import Quiz from "./pages/Dashboard/Quiz";
// import Login from "@/pages/auth/Login";

import NotFound from "./pages/NotFound";

// function ProtectedRoute() {
//     const { isAuthenticated } = useAuth();
//     const location = useLocation();
//     if (isAuthenticated) {
//         return <Outlet />;
//     } else {
//         let nextPage = location.pathname || "/";
//         return <Navigate to={`/login?next=${nextPage}`} />;
//     }
// }

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/about" element={<About />} />
                <Route path="/features" element={<Features />} />
                <Route path="/dashboard" element={<Dashboard2 />} />
                <Route path="/quiz" element={<Quiz />} />

                {/* <Route path="login/" element={<Login />} /> */}
                {/* <Route path="learn" element={<ProtectedRoute />}>
                <Route path="/login" element={<Login />} />
                {/* <Route path="/learn" element={<ProtectedRoute />}> */}
                <Route path="/learn/" element={<Dashboard />} />
                <Route path="/learn/content/" element={<Content />} />
                {/* </Route> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
