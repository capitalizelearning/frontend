import Shell from "./app/Shell";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <Shell>
            <div className="flex flex-col justify-between flex-1 w-full h-full">

                <Link to="/learn/content">Content</Link>

            </div>
        </Shell>
    );
}
