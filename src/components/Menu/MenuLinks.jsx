import ActiveLink from "@/components/ActiveLink";
import { useAuth } from "@/hooks/useAuth";

function MenuLinks() {
    const { logout } = useAuth();
    return (
        <nav className="px-5 h-full flex flex-col">
            <ActiveLink to="/learn/" label="Dashboard" />
            <ActiveLink to="/learn/lessons" label="Lessons" />
            {/* <ActiveLink to="#" label="Messages" />
            <ActiveLink to="#" label="News" /> */}
            <ActiveLink to="/learn/quizzes/" label="Quiz" />
            {/* <ActiveLink to="/learn/trade/simulation" label="Trade Simulation" /> */}
            {/* <ActiveLink to="#" label="Settings"  /> */}
            <button onClick={logout} className="appearance-none mt-auto">
                <ActiveLink to="" label="Logout" />
            </button>
        </nav>
    );
}

export default MenuLinks;
