import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full px-6 py-4 bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-800">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Admin Dashboard. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6">
          <Link 
            href="/"
            className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Home
          </Link>
          <Link 
            href="/profile"
            className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Profile
          </Link>
          <Link 
            href="/calendar"
            className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Calendar
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 