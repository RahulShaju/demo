import React from "react";

interface TextAreaProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
  rows?: number;
  disabled?: boolean;
  required?: boolean;
  resize?: "none" | "vertical" | "horizontal" | "both"; // updated
}

const TextArea: React.FC<TextAreaProps> = ({
  value = "",
  onChange,
  placeholder = "Enter text...",
  label,
  className = "",
  rows = 4,
  disabled = false,
  required = false,
  resize = "vertical", // default vertical
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <textarea
        className={`border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-400 bg-white
          ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}
        `}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        required={required}
        style={{ resize }} // no more TypeScript error
      />
    </div>
  );
};

export default TextArea;
