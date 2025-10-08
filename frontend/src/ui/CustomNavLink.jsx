import { NavLink } from "react-router-dom";

export default function CustomNavLink({ children, to }) {
    const navLinkClass = "flex items-center gap-x-2 hover:bg-primary-100/80 text-secondary-900 hover:text-primary-900 duration-300 transition-all rounded-lg py-1.5 px-2"

    return (
        <li>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive
                        ? `${navLinkClass} bg-primary-100/50 text-primary-900`
                        : `${navLinkClass} text-secondary-600`
                }>
                {children}
            </NavLink>
        </li>
    );
}
