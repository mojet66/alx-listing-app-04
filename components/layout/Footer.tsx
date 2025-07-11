import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 mt-8 p-6 text-white">
      <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto container">
        {/* About Section */}
        <div>
          <h3 className="mb-3 font-semibold text-lg">About Us</h3>
          <p className="text-gray-400 text-sm">
            Discover the perfect place to stay for your next adventure. We offer
            a wide range of accommodations to suit every need and budget.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-3 font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="mb-3 font-semibold text-lg">Contact</h3>
          <p className="text-gray-400 text-sm">
            123 Main Street, Cityville, Country
            <br />
            Email: info@example.com
            <br />
            Phone: +1 234 567 8900
          </p>
          {/* Social Media Links (Optional) */}
          <div className="flex space-x-4 mt-4">
            {/* Replace with actual social media icons/links */}
            <a
              href="https://www.facebook.com"
              className="text-gray-400 hover:text-white"
            >
              Facebook
            </a>
            <a
              href="https://www.x.com"
              className="text-gray-400 hover:text-white"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com"
              className="text-gray-400 hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-gray-700 border-t text-gray-500 text-sm text-center">
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
