import { FiHome, FiGrid, FiUser, FiSettings } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const menuItems = [
  { label: "Home", icon: FiHome, path: "/home" },
  { label: "Dashboard", icon: FiGrid, path: "/dashboard" },
  { label: "Clients", icon: FiUser, path: "/clients" },
  { label: "Settings", icon: FiSettings, path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-20 bg-gray-100 text-white flex flex-col items-center py-6 space-y-6">
      {/* Logo */}
      <button className="flex w-12 h-12 flex-col items-center gap-1 text-gray-400 hover:text-white transition">
        <img src="/logo.png" alt="logo" className="w-8 h-8" />
      </button>

      {/* Menu Items */}
      {menuItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 text-gray-400 hover:text-black transition ${
                isActive ? "text-black" : ""
              }`
            }
          >
            <Icon size={22} />
            <span className="text-[11px] font-medium">{item.label}</span>
          </NavLink>
        );
      })}
    </aside>
  );
}
