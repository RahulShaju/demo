import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

interface EditableNameCellProps {
  value?: string;
  placeholder?: string;
  onChange?: (val: string) => void;
  onDelete?: () => void;
}

const EditableNameCell: React.FC<EditableNameCellProps> = ({
  value = "",
  placeholder = "Enter name",
  onChange,
  onDelete,
}) => {
  const hasValue = value.trim() !== "";

  return (
    <div className="group flex items-center justify-between gap-2 px-3 truncate">
      {/* Text OR Input */}
      {hasValue ? (
        <span className="font-semibold text-gray-900 truncate">{value}</span>
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="w-full font-semibold placeholder:font-medium text-sm  py-1 border-0 rounded focus:outline-none focus:ring-1 focus:ring-transparent"
          onChange={(e) => onChange?.(e.target.value)}
        />
      )}

      {/* Delete Icon (hover only) */}
      {hasValue && onDelete && (
        <button
          onClick={onDelete}
          className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-opacity"
          title="Delete"
        >
          <HiOutlineTrash size={16} />
        </button>
      )}
    </div>
  );
};

export default EditableNameCell;
