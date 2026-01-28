import React from "react";

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  id?: string;
  disabled?: boolean;
  className?: string;
  width?: number; // toggle width in px
  height?: number; // toggle height in px
}

const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  label,
  id,
  disabled = false,
  className = "",
  width = 44, // default width ~ w-11
  height = 24, // default height ~ h-6
}) => {
  const circleSize = height - 4; // inner circle smaller than toggle height

  return (
    <label
      className={`inline-flex items-center cursor-pointer ${className}`}
      style={{ fontSize: height * 0.5 }} // optional scaling for label
    >
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        id={id}
        disabled={disabled}
      />

      <div
        className="relative peer bg-gray-200 peer-focus:outline-none rounded-full transition-colors duration-200"
        style={{
          width: width,
          height: height,
          backgroundColor: checked ? "#3b82f6" : "#e5e7eb", // Tailwind bg-blue-500 / gray-200
        }}
      >
        <div
          className="absolute bg-white rounded-full shadow-md transition-all duration-200"
          style={{
            width: circleSize,
            height: circleSize,
            top: 2,
            left: checked ? width - circleSize - 2 : 2,
          }}
        />
      </div>

      {label && (
        <span className="ms-3 text-sm font-medium text-gray-900">{label}</span>
      )}
    </label>
  );
};

export default Toggle;
