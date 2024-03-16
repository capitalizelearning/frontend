import ActiveLink from "@/components/ActiveLink";
import { useAuth } from "@/hooks/useAuth";

function MenuLinks() {
    const { logout } = useAuth();
    return (
        <nav className="px-5 h-full flex flex-col">
            <ActiveLink to="/learn/" label="Dashboard" />
            <ActiveLink to="/learn/lessons" label="Lessons" />
            <ActiveLink to="#" label="Messages" />
            <ActiveLink to="#" label="News" />
            <ActiveLink to="#" label="Quiz" />
            <ActiveLink to="/trade/simulation" label="Trade Simulation" />
            <ActiveLink to="#" label="Settings" classNames="mt-auto" />
            <button onClick={logout} className="appearance-none">
                <ActiveLink to="" label="Logout" />
            </button>
        </nav>
    );
}

export default MenuLinks;
