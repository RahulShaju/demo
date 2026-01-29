// DropdownCell.tsx
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

interface DropdownCellProps {
  value: string;
  options: string[];
  optionClasses?: Record<string, string>; // optional per-option CSS
  onChange?: (newValue: string) => void;
}

const DropdownCell: React.FC<DropdownCellProps> = ({
  value,
  options,
  optionClasses = {},
  onChange,
}) => {
  const [selected, setSelected] = useState(value);
  const [open, setOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState<{
    top: number;
    left: number;
    width: number;
  } | null>(null);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSelect = (val: string) => {
    console.log("selected option", val);
    setSelected(val);
    setOpen(false);
    if (onChange) onChange(val);
  };

  console.log("Selected", selected, value);

  const toggleDropdown = () => {
    if (!open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();

      setDropdownPos({
        top: rect.bottom + window.scrollY,
        left: rect.left + rect.width / 2 + window.scrollX, // ✅ CENTER
        width: rect.width,
      });
    }
    setOpen(!open);
  };

  // Close dropdown if clicked outside
  // useEffect(() => {
  //   const handleClickOutside = (e: MouseEvent) => {
  //     if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
  //       setOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  return (
    <div className="relative w-full ">
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className={`w-full px-3 py-1.5 -z-20 text-sm font-medium border border-[#D6E4FF] transition-all ${
          optionClasses[selected] || "bg-gray-200"
        }`}
      >
        {selected || value}
      </button>

      {open &&
        dropdownPos &&
        ReactDOM.createPortal(
          <div
            style={{
              position: "absolute",
              top: dropdownPos.top,
              left: dropdownPos.left,
              transform: "translateX(-50%)", // 👈 center dropdown
              // zIndex: 50,
            }}
          >
            {/* Arrow / pointer */}
            <div
              style={{
                position: "absolute",
                top: -6,
                left: "50%", // 👈 center arrow
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderBottom: "6px solid white",
              }}
            />

            {/* Dropdown box */}
            <div className="p-4 bg-gray-100 border border-gray-300 rounded shadow-md max-h-60 w-64 overflow-y-auto">
              {options.map((opt) => (
                <div
                  key={opt}
                  className={`px-3 py-1 text-sm cursor-pointer hover:bg-blue-100 ${
                    opt === selected ? "font-semibold" : ""
                  } ${optionClasses[opt] || ""}`}
                  onClick={() => handleSelect(opt)}
                >
                  {opt}
                </div>
              ))}
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};

export default DropdownCell;
