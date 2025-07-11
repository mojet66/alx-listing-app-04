import React from "react";
import Image from "next/image";
import Link from "next/link";

const accommodationTypes = [
  "Rooms",
  "Mansion",
  "Countryside",
  "Apartment",
  "Villa",
  "Cabin",
  "Treehouse",
  "Igloo",
];

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="flex md:flex-row flex-col justify-between items-center space-y-4 md:space-y-0 mx-auto container">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            {/* Replace with your actual logo path and alt text */}
            <Image
              src="/path/to/your/logo.png" // Make sure to replace this with your logo path
              alt="Your Company Logo"
              width={120} // Adjust width as needed
              height={40} // Adjust height as needed
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4 w-full md:w-auto max-w-xl">
          <input
            type="text"
            placeholder="Search for accommodation..."
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>

        {/* Sign In / Sign Up */}
        <div className="flex items-center space-x-4">
          <Link href="/signin" className="text-gray-700 hover:text-blue-600">
            Sign In
          </Link>
          <Link
            href="/signup"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Types of Accommodation Navigation */}
      <nav className="mt-4 pt-4 border-t">
        <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-gray-600 text-sm">
          {accommodationTypes.map((type) => (
            <li key={type}>
              <Link
                href={`/accommodation/${type
                  .toLowerCase()
                  .replace(/\s/g, "-")}`}
                className="hover:text-blue-600"
              >
                {type}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
