import { FiBell } from "react-icons/fi";

type NotificationBellProps = {
  count?: number;
  onClick?: () => void;
};

export default function NotificationBell({
  count = 0,
  onClick,
}: NotificationBellProps) {
  return (
    <button
      onClick={onClick}
      className="relative p-2 rounded-full hover:bg-gray-100 transition"
      aria-label="Notifications"
    >
      <FiBell size={20} />

      {count > 0 && (
        <span
          className="absolute -top-0.5 -right-0.5 min-w-4 h-4 px-1 
          rounded-full bg-red-500 text-white text-[10px] 
          flex items-center justify-center"
        >
          {count > 9 ? "9+" : count}
        </span>
      )}
    </button>
  );
}
