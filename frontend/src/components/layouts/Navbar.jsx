import React from "react";
import { User, Menu, Sun, Moon } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import useTheme from "../../hook/useTheme";

const Navbar = ({ onMenuClick }) => {
  const { isDark, setIsDark } = useTheme();
  const location = useLocation();
  const pageTitles = {
    "/dashboard": "Dashboard",
    "/transactions": "Transactions",
    "/analytics": "Analytics",
    "/settings": "Settings",
  };
  return (
    <>
      {/* desktop */}
      <nav
        className={`${isDark ? "bg-sidebar hidden text-white py-6 px-4 md:flex items-center justify-between shadow-lg" : "hidden bg-surface py-6 px-4 md:flex items-center justify-between shadow-lg"}`}
      >
        <div>
          <h2 className="text-2xl">{pageTitles[location.pathname]}</h2>
        </div>
        <div className="flex gap-8">
          {isDark ? (
            <Sun
              onClick={() => setIsDark((prev) => !prev)}
              className="cursor-pointer"
            />
          ) : (
            <Moon
              onClick={() => setIsDark((prev) => !prev)}
              className="cursor-pointer"
            />
          )}
          <NavLink to="/settings">
            <User className="cursor-pointer" />
          </NavLink>
        </div>
      </nav>

      {/* mobile */}
      <nav
        className={`${isDark ? "bg-sidebar text-white md:hidden py-6 px-4 flex items-center justify-between shadow-lg" : "md:hidden bg-surface py-6 px-4 flex items-center justify-between shadow-lg"}`}
      >
        <Menu onClick={onMenuClick} size={25} />
        <div>
          <h2 className="text-2xl">{pageTitles[location.pathname]}</h2>
        </div>
        <div className="flex items-center gap-4">
          {isDark ? (
            <Sun
              onClick={() => setIsDark((prev) => !prev)}
              className="cursor-pointer"
            />
          ) : (
            <Moon
              onClick={() => setIsDark((prev) => !prev)}
              className="cursor-pointer"
            />
          )}
          <NavLink to="/settings">
            <User className="cursor-pointer" />
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
