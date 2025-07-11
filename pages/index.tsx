// pages/index.tsx
import React, { useState } from "react";
import Image from "next/image";
import Layout from "../components/layout/Layout"; // Adjust path if needed
import Pill from "../components/Pill";
import {
  HERO_BACKGROUND_IMAGE,
  PROPERTY_LISTING_SAMPLE,
  FILTER_LABELS,
  DEFAULT_PROPERTY_IMAGE,
} from "../constants";
import { PropertyProps } from "../interfaces";

const Home: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleFilterClick = (label: string) => {
    setActiveFilters((prevFilters) => {
      if (prevFilters.includes(label)) {
        // Remove filter if already active
        return prevFilters.filter((filter) => filter !== label);
      } else {
        // Add filter if not active
        return [...prevFilters, label];
      }
    });
  };

  // Filter properties based on active filters
  const filteredProperties = PROPERTY_LISTING_SAMPLE.filter((property) => {
    if (activeFilters.length === 0) {
      return true; // Show all if no filters are active
    }
    // Check if property category includes ANY of the active filters
    return activeFilters.every((filter) => property.category.includes(filter));
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative flex justify-center items-center bg-cover bg-center h-[400px] md:h-[500px] overflow-hidden text-white text-center"
        style={{ backgroundImage: `url(${HERO_BACKGROUND_IMAGE})` }}
      >
        <div className="z-10 absolute inset-0 bg-black opacity-40"></div>{" "}
        {/* Overlay */}
        <div className="z-20 relative p-4">
          <h1 className="drop-shadow-lg mb-4 font-bold text-4xl md:text-6xl">
            Find your favorite place here!
          </h1>
          <p className="drop-shadow-md text-lg md:text-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="mx-auto px-4 py-8 container">
        <h2 className="mb-4 font-semibold text-gray-800 text-2xl">
          Explore Categories
        </h2>
        <div className="flex flex-wrap gap-3">
          {FILTER_LABELS.map((label) => (
            <Pill
              key={label}
              label={label}
              onClick={handleFilterClick}
              isActive={activeFilters.includes(label)}
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="mx-auto px-4 py-8 container">
        <h2 className="mb-6 font-semibold text-gray-800 text-2xl">
          Featured Properties
        </h2>
        {filteredProperties.length > 0 ? (
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProperties.map((property) => (
              <div
                key={property.name} // Using name as key for simplicity, consider a unique ID for real apps
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200 transform"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={property.image || DEFAULT_PROPERTY_IMAGE} // Use fallback if image is missing
                    alt={property.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-semibold text-gray-900 text-xl truncate">
                    {property.name}
                  </h3>
                  <div className="flex items-center mb-2 text-gray-600 text-sm">
                    <span className="mr-1 text-yellow-500">&#9733;</span>{" "}
                    {/* Star icon */}
                    {property.rating.toFixed(2)}
                  </div>
                  <div className="font-bold text-blue-700 text-lg">
                    ${property.price.toLocaleString()}
                    {property.discount && (
                      <span className="ml-2 text-red-500 text-sm line-through">
                        $
                        {(
                          property.price /
                          (1 - parseInt(property.discount) / 100)
                        ).toLocaleString()}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-gray-500 text-sm">
                    {property.address.city}, {property.address.country}
                  </p>
                  {property.discount && (
                    <span className="inline-block bg-green-500 mt-2 px-2 py-1 rounded-full font-bold text-white text-xs">
                      {property.discount}% OFF
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-lg text-center">
            No properties match your selected filters.
          </p>
        )}
      </section>
    </Layout>
  );
};

export default Home;
