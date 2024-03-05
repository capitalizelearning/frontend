/* eslint-disable react/prop-types */
// ActiveLink.js
import { NavLink, useLocation } from 'react-router-dom';

const ActiveLink = ({ to, label }) => {
    const location = useLocation();

    const isActive = location.pathname === to;
    return (
        <NavLink
            to={to}
            className={`${isActive && 'bg-[#202020] text-[#F5F5F5] font-bold'} mb-2 block py-2.5 px-4 rounded-lg hover:bg-[#202020] hover:text-white transition duration-200 text-center`}
        >
            {label}
        </NavLink>
    );
};

export default ActiveLink;
