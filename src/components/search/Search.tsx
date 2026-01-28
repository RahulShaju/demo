import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

interface SearchBoxProps {
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  value = "",
  onChange,
  onSearch,
  placeholder = "Search...",
  className = "",
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (val: string) => {
    setInputValue(val);
    onChange?.(val);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch?.(inputValue);
    }
  };

  const clearInput = () => {
    setInputValue("");
    onChange?.("");
    onSearch?.("");
  };

  return (
    <div
      className={`flex items-center bg-white border border-gray-300 rounded-md px-3 py-1 shadow-sm focus-within:ring-1 focus-within:ring-blue-400 ${className}`}
    >
      <FiSearch className="text-gray-400" size={24} />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="ml-2 w-full outline-none  py-1 text-xs text-gray-700 placeholder-gray-400"
      />
      {inputValue && (
        <button
          onClick={clearInput}
          className="ml-2 text-gray-400 hover:text-gray-600"
        >
          <FiX size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBox;
