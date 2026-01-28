import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export interface TabItem {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: TabItem[];
  value: string;
  onChange: (id: string) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  value,
  onChange,
  className = "",
}) => {
  return (
    <div
      className={`flex bg-gray-200 rounded-lg p-1 gap-1 ${className}`}
      style={{ width: `${tabs.length * 120}px` }} // optional fixed container width
    >
      {tabs.map((tab) => {
        const isActive = tab.id === value;

        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className="relative flex-1 px-4 py-2 text-sm font-medium rounded-md overflow-hidden"
          >
            {/* Active background */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute inset-0 bg-black rounded-md"
                />
              )}
            </AnimatePresence>

            {/* Label */}
            <span
              className={`relative z-10 transition-colors duration-200 ${
                isActive ? "text-white" : "text-gray-600"
              }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
