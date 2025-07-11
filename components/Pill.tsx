import React from "react";

interface PillProps {
  label: string;
  onClick: (label: string) => void;
  isActive: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, isActive }) => {
  return (
    <button
      onClick={() => onClick(label)}
      className={`
        px-4 py-2 rounded-full text-sm font-medium
        transition-colors duration-200 ease-in-out
        ${
          isActive
            ? "bg-blue-600 text-white shadow-md"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }
      `}
    >
      {label}
    </button>
  );
};

export default Pill;
