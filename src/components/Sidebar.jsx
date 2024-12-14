import {
    BuildingLibraryIcon,
    HomeIcon,
    TagIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
    const locationPath = useLocation();
    const menuItems = [
        {
            title: "Dashboard",
            route: "/",
            icon: <HomeIcon className="size-5 text-black" />,
        },
        {
            title: "Anime",
            route: "/anime",
            icon: <BuildingLibraryIcon className="size-5 text-black" />,
        },
        {
            title: "Category",
            route: "/category",
            icon: <TagIcon className="size-5 text-black" />,
        },
    ];

    return (
        <section className="w-64 h-screen border-r border-black relative">
            {/* Admin Dashboard Header */}
            <div className="m-2 p-5">Admin Dashboard</div>

            {/* Menu Items */}
            <ul className="pt-6 px-2 py-2">
                {menuItems.map((item, idx) => (
                    <Link key={idx} to={item.route} className="block">
                        <li
                            className={`px-3 py-2 mb-1 flex items-center hover:border rounded-md border-black ${locationPath.pathname === item.route
                                    ? "border rounded-md border-black"
                                    : ""
                                }`}
                        >
                            {item.icon}
                            <div className="mr-2"></div>
                            {item.title}
                        </li>
                    </Link>
                ))}
            </ul>
        </section>
    );
}

export default Sidebar;
