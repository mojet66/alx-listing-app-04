import React from "react";
import { CardProps } from "../../interfaces";

export const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  onClick,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {imageSrc && (
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h2 className="mb-2 font-semibold text-xl">{title}</h2>
        <p className="mb-4 text-gray-600">{description}</p>
        {onClick && (
          <button
            onClick={onClick}
            className="bg-blue-500 px-4 py-2 rounded text-white"
          >
            Learn More
          </button>
        )}
      </div>
    </div>
  );
};
