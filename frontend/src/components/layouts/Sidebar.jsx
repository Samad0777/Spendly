import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ArrowLeftRight,
  ChartPie,
  Settings,
  X,
} from "lucide-react";

const Sidebar = ({ isOpen, onMenuClick }) => {
  return (
    <>
      <aside className="w-56 h-screen shrink-0 bg-background-sidebar text-white px-4 hidden md:block">
        <div className="flex flex-col gap-2 border-b border-text-secondary px-2 py-8 mb-2">
          <h2>Spendly</h2>
          <p className="text-text-secondary">Personal Expense Tracker</p>
        </div>
        <h3 className="text-text-secondary">Menu</h3>
        <div className="flex flex-col gap-2 mt-4">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 bg-primary rounded-xl px-4 py-2"
                : "flex items-center gap-2 text-text-secondary rounded-xl px-4 py-2"
            }
          >
            <LayoutDashboard size={15} />
            Dashboard
          </NavLink>
          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 bg-primary rounded-xl px-4 py-2"
                : "flex items-center gap-2 text-text-secondary rounded-xl px-4 py-2"
            }
          >
            <ArrowLeftRight size={15} />
            Transactions
          </NavLink>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 bg-primary rounded-xl px-4 py-2"
                : "flex items-center gap-2 text-text-secondary rounded-xl px-4 py-2"
            }
          >
            <ChartPie size={15} />
            Analytics
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 bg-primary rounded-xl px-4 py-2"
                : "flex items-center gap-2 text-text-secondary rounded-xl px-4 py-2"
            }
          >
            <Settings size={15} />
            Settings
          </NavLink>
        </div>
      </aside>

      {isOpen && (
        <div onClick={onMenuClick} className="fixed inset-0 bg-black/20 z-40">
          <aside
            onClick={(e) => e.stopPropagation()}
            className={`"absolute z-50 w-60 h-screen shrink-0 bg-background-sidebar text-white px-4 md:hidden transition-transform duration-300" `}
          ><div className="flex justify-end pt-4 pr-4 h-0">
              <X
                onClick={onMenuClick}
                className="text-text-secondary"
                size={25}
                />
                </div>
            <div className="flex flex-col gap-2 border-b border-text-secondary px-2 py-8 mb-2">
              <h2>Spendly</h2>
              <p className="text-text-secondary">Personal Expense Tracker</p>
            </div>
            <h3 className="text-text-secondary">Menu</h3>
            <div className="flex flex-col gap-2 mt-4">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2 bg-primary rounded-xl px-4 py-2"
                    : "flex items-center gap-2 text-text-secondary rounded-xl px-4 py-2"
                }
              >
                <LayoutDashboard size={15} />
                Dashboard
              </NavLink>
              <NavLink
                to="/transactions"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2 bg-primary rounded-xl px-4 py-2"
                    : "flex items-center gap-2 text-text-secondary rounded-xl px-4 py-2"
                }
              >
                <ArrowLeftRight size={15} />
                Transactions
              </NavLink>
              <NavLink
                to="/analytics"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2 bg-primary rounded-xl px-4 py-2"
                    : "flex items-center gap-2 text-text-secondary rounded-xl px-4 py-2"
                }
              >
                <ChartPie size={15} />
                Analytics
              </NavLink>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2 bg-primary rounded-xl px-4 py-2"
                    : "flex items-center gap-2 text-text-secondary rounded-xl px-4 py-2"
                }
              >
                <Settings size={15} />
                Settings
              </NavLink>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Sidebar;
