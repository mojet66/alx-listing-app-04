// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function Home() {
//   return (
//     <div
//       className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
//     >
//       <main className="flex flex-col items-center sm:items-start gap-[32px] row-start-2">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-[family-name:var(--font-geist-mono)] text-sm/6 sm:text-left text-center list-decimal list-inside">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               pages/index.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>
//         <div className="flex sm:flex-row flex-col items-center gap-4">
//           <a
//             className="flex justify-center items-center gap-2 bg-foreground hover:bg-[#383838] dark:hover:bg-[#ccc] px-4 sm:px-5 border border-transparent border-solid rounded-full sm:w-auto h-10 sm:h-12 font-medium text-background text-sm sm:text-base transition-colors"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="flex justify-center items-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] px-4 sm:px-5 border dark:border-white/[.145] hover:border-transparent border-black/[.08] border-solid rounded-full w-full sm:w-auto md:w-[158px] h-10 sm:h-12 font-medium text-sm sm:text-base transition-colors"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="flex flex-wrap justify-center items-center gap-[24px] row-start-3">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

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
