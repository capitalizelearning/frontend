// ActiveLink.js
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const ActiveLink = ({ to, label, classNames = "" }) => {
    const location = useLocation();

    const isActive = location.pathname === to;
    return (
        <NavLink
            to={to}
            className={`${
                isActive && "bg-[#202020] text-[#F5F5F5] font-bold"
            } mb-2 block py-2.5 px-4 rounded-lg hover:bg-[#202020] hover:text-white transition duration-200 text-center ${classNames}`}>
            {label}
        </NavLink>
    );
};
ActiveLink.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    classNames: PropTypes.string,
};

export default ActiveLink;
