import { useAuth } from "@/hooks/useAuth";
import About from "@/pages/About";
import ContactUs from "@/pages/ContactUs.jsx";
import Dashboard2 from "@/pages/Dashboard/Dashboard";
import LessonDetail from "@/pages/Dashboard/LessonDetail";
import Lessons from "@/pages/Dashboard/Lessons";
import QuizPage from "@/pages/Dashboard/QuizPage";
import TradeIndex from "@/pages/Trade/TradeIndex";
import Quizzes from "@/pages/Dashboard/Quizzes";
import Features from "@/pages/Features";
import Landing from "@/pages/Landing";
import NotFound from "@/pages/NotFound";
import Privacy from "@/pages/Privacy";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Terms from "@/pages/Terms";
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
    if (isAuthenticated) return <Outlet />;
    else {
        let nextPage = location.pathname || "/learn";
        return <Navigate to={`/auth/login?next=${nextPage}`} />;
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
                <Route path="/auth">
                    <Route
                        path="/auth/"
                        element={<Navigate to="/auth/login" />}
                    />
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/register" element={<Register />} />
                </Route>
                {/* <Route path="/dashboard/" element={<Dashboard2 />} />
                <Route path="/trade" element={<TradeIndex />} /> */}

                {/* Requires Auth: */}
                <Route path="/learn" element={<ProtectedRoute />}>
                    <Route path="/learn/" element={<Dashboard2 />} />
                    <Route path="/learn/lessons/" element={<Lessons />} />
                    <Route
                        path="/learn/lessons/:lessonId"
                        element={<LessonDetail />}
                    />
                    <Route path="/learn/quizzes/" element={<Quizzes />} />
                    <Route
                        path="/learn/quizzes/:quizId"
                        element={<QuizPage />}
                    />
                    {/* <Route path="/learn/trade/simulation" element={<TradeIndex />} /> */}
                </Route>
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
