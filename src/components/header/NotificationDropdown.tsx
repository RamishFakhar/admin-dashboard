"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  function clearAll() {
    setNotifying(false);
  }

  const handleClick = () => {
    toggleDropdown();
    setNotifying(false);
  };
  return (
    <div className="relative">
      <button
        className="relative dropdown-toggle flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-gray-700 h-11 w-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
        onClick={handleClick}
      >
        <span
          className={`absolute right-0 top-0.5 z-10 h-2 w-2 rounded-full bg-orange-400 ${
            !notifying ? "hidden" : "flex"
          }`}
        >
          <span className="absolute inline-flex w-full h-full bg-orange-400 rounded-full opacity-75 animate-ping"></span>
        </span>
        <svg
          className="fill-current"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.75 2.29248C10.75 1.87827 10.4143 1.54248 10 1.54248C9.58583 1.54248 9.25004 1.87827 9.25004 2.29248V2.83613C6.08266 3.20733 3.62504 5.9004 3.62504 9.16748V14.4591H3.33337C2.91916 14.4591 2.58337 14.7949 2.58337 15.2091C2.58337 15.6234 2.91916 15.9591 3.33337 15.9591H4.37504H15.625H16.6667C17.0809 15.9591 17.4167 15.6234 17.4167 15.2091C17.4167 14.7949 17.0809 14.4591 16.6667 14.4591H16.375V9.16748C16.375 5.9004 13.9174 3.20733 10.75 2.83613V2.29248ZM14.875 14.4591V9.16748C14.875 6.47509 12.6924 4.29248 10 4.29248C7.30765 4.29248 5.12504 6.47509 5.12504 9.16748V14.4591H14.875ZM8.00004 17.7085C8.00004 18.1228 8.33583 18.4585 8.75004 18.4585H11.25C11.6643 18.4585 12 18.1228 12 17.7085C12 17.2943 11.6643 16.9585 11.25 16.9585H8.75004C8.33583 16.9585 8.00004 17.2943 8.00004 17.7085Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute left-1/2 transform -translate-x-1/2 top-14 mt-1 flex h-[450px] w-[94vw] max-w-[350px] flex-col rounded-2xl border border-gray-200 bg-white p-2 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark z-50 sm:h-[480px] sm:w-[361px] sm:p-3 sm:left-auto sm:-right-[240px] sm:translate-x-0 sm:top-auto sm:mt-[17px] lg:right-0"
      >
        <div className="flex flex-col items-center sm:items-start pb-2 mb-2 border-b border-gray-100 dark:border-gray-700 sm:pb-3 sm:mb-3">
          <h5 className="text-sm font-medium text-center sm:text-left text-gray-800 dark:text-white/90 sm:text-base mb-1 sm:mb-0">
            Notifications
          </h5>
          {notifying && (
            <button
              onClick={clearAll}
              className="text-xs hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white/90 sm:text-theme-sm"
            >
              Clear all
            </button>
          )}
        </div>
        <ul className="flex flex-col h-auto overflow-y-auto custom-scrollbar">
          {/* Example notification items */}
          <li>
            <DropdownItem
              className="flex flex-col items-center sm:items-start sm:flex-row gap-2 rounded-lg border-b border-gray-100 p-2 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5 sm:gap-3 sm:p-3 sm:px-4.5 sm:py-3"
              onItemClick={closeDropdown}
            >
              <span className="relative flex-shrink-0 block w-10 h-10 rounded-full sm:h-10 sm:w-10">
                <Image
                  width={40}
                  height={40}
                  src="/images/P1.png"
                  alt="User"
                  className="w-full h-full object-cover overflow-hidden rounded-full"
                  priority
                />
                <span className="absolute bottom-0 right-0 z-10 h-2.5 w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"></span>
              </span>

              <div className="flex flex-col overflow-hidden text-center sm:text-left">
                <div className="mb-0.5 block text-xs sm:text-theme-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Ramish Fakhar
                  </span>
                  <span className="block text-xs truncate">requests permission to change</span>
                </div>
                <div className="font-medium text-xs truncate text-gray-800 dark:text-white/90 mb-0.5">
                  Project - Nganter App
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 text-[11px] sm:text-theme-xs text-gray-500 dark:text-gray-400">
                  <span>Project</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>5 min ago</span>
                </div>
              </div>
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex flex-col items-center sm:items-start sm:flex-row gap-2 rounded-lg border-b border-gray-100 p-2 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5 sm:gap-3 sm:p-3 sm:px-4.5 sm:py-3"
            >
              <span className="relative flex-shrink-0 block w-10 h-10 rounded-full sm:h-10 sm:w-10">
                <Image
                  width={40}
                  height={40}
                  src="/images/P1.png"
                  alt="User"
                  className="w-full h-full object-cover overflow-hidden rounded-full"
                  priority
                />
                <span className="absolute bottom-0 right-0 z-10 h-2.5 w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"></span>
              </span>

              <div className="flex flex-col overflow-hidden text-center sm:text-left">
                <div className="mb-0.5 block text-xs sm:text-theme-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Alena Franci
                  </span>
                  <span className="block text-xs truncate">requests permission to change</span>
                </div>
                <div className="font-medium text-xs truncate text-gray-800 dark:text-white/90 mb-0.5">
                  Project - Nganter App
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 text-[11px] sm:text-theme-xs text-gray-500 dark:text-gray-400">
                  <span>Project</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>8 min ago</span>
                </div>
              </div>
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex flex-col items-center sm:items-start sm:flex-row gap-2 rounded-lg border-b border-gray-100 p-2 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5 sm:gap-3 sm:p-3 sm:px-4.5 sm:py-3"
            >
              <span className="relative flex-shrink-0 block w-10 h-10 rounded-full sm:h-10 sm:w-10">
                <Image
                  width={40}
                  height={40}
                  src="/images/P1.png"
                  alt="User"
                  className="w-full h-full object-cover overflow-hidden rounded-full"
                  priority
                />
                <span className="absolute bottom-0 right-0 z-10 h-2.5 w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"></span>
              </span>

              <div className="flex flex-col overflow-hidden text-center sm:text-left">
                <div className="mb-0.5 block text-xs sm:text-theme-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Jocelyn Kenter
                  </span>
                  <span className="block text-xs truncate">requests permission to change</span>
                </div>
                <div className="font-medium text-xs truncate text-gray-800 dark:text-white/90 mb-0.5">
                  Project - Nganter App
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 text-[11px] sm:text-theme-xs text-gray-500 dark:text-gray-400">
                  <span>Project</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>15 min ago</span>
                </div>
              </div>
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex flex-col items-center sm:items-start sm:flex-row gap-2 rounded-lg border-b border-gray-100 p-2 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5 sm:gap-3 sm:p-3 sm:px-4.5 sm:py-3"
            >
              <span className="relative flex-shrink-0 block w-10 h-10 rounded-full sm:h-10 sm:w-10">
                <Image
                  width={40}
                  height={40}
                  src="/images/P1.png"
                  alt="User"
                  className="w-full h-full object-cover overflow-hidden rounded-full"
                  priority
                />
                <span className="absolute bottom-0 right-0 z-10 h-2.5 w-2.5 rounded-full border-[1.5px] border-white bg-error-500 dark:border-gray-900"></span>
              </span>

              <div className="flex flex-col overflow-hidden text-center sm:text-left">
                <div className="mb-0.5 block text-xs sm:text-theme-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Brandon Philips
                  </span>
                  <span className="block text-xs truncate">requests permission to change</span>
                </div>
                <div className="font-medium text-xs truncate text-gray-800 dark:text-white/90 mb-0.5">
                  Project - Nganter App
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 text-[11px] sm:text-theme-xs text-gray-500 dark:text-gray-400">
                  <span>Project</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>1 hr ago</span>
                </div>
              </div>
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              className="flex flex-col items-center sm:items-start sm:flex-row gap-2 rounded-lg border-b border-gray-100 p-2 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5 sm:gap-3 sm:p-3 sm:px-4.5 sm:py-3"
              onItemClick={closeDropdown}
            >
              <span className="relative flex-shrink-0 block w-10 h-10 rounded-full sm:h-10 sm:w-10">
                <Image
                  width={40}
                  height={40}
                  src="/images/P1.png"
                  alt="User"
                  className="w-full h-full object-cover overflow-hidden rounded-full"
                  priority
                />
                <span className="absolute bottom-0 right-0 z-10 h-2.5 w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"></span>
              </span>

              <div className="flex flex-col overflow-hidden text-center sm:text-left">
                <div className="mb-0.5 block text-xs sm:text-theme-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Terry Franci
                  </span>
                  <span className="block text-xs truncate">requests permission to change</span>
                </div>
                <div className="font-medium text-xs truncate text-gray-800 dark:text-white/90 mb-0.5">
                  Project - Nganter App
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 text-[11px] sm:text-theme-xs text-gray-500 dark:text-gray-400">
                  <span>Project</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>5 min ago</span>
                </div>
              </div>
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex flex-col items-center sm:items-start sm:flex-row gap-2 rounded-lg border-b border-gray-100 p-2 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5 sm:gap-3 sm:p-3 sm:px-4.5 sm:py-3"
            >
              <span className="relative flex-shrink-0 block w-10 h-10 rounded-full sm:h-10 sm:w-10">
                <Image
                  width={40}
                  height={40}
                  src="/images/P1.png"
                  alt="User"
                  className="w-full h-full object-cover overflow-hidden rounded-full"
                  priority
                />
                <span className="absolute bottom-0 right-0 z-10 h-2.5 w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"></span>
              </span>

              <div className="flex flex-col overflow-hidden text-center sm:text-left">
                <div className="mb-0.5 block text-xs sm:text-theme-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Alena Franci
                  </span>
                  <span className="block text-xs truncate">requests permission to change</span>
                </div>
                <div className="font-medium text-xs truncate text-gray-800 dark:text-white/90 mb-0.5">
                  Project - Nganter App
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 text-[11px] sm:text-theme-xs text-gray-500 dark:text-gray-400">
                  <span>Project</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>8 min ago</span>
                </div>
              </div>
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex flex-col items-center sm:items-start sm:flex-row gap-2 rounded-lg border-b border-gray-100 p-2 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5 sm:gap-3 sm:p-3 sm:px-4.5 sm:py-3"
            >
              <span className="relative flex-shrink-0 block w-10 h-10 rounded-full sm:h-10 sm:w-10">
                <Image
                  width={40}
                  height={40}
                  src="/images/P1.png"
                  alt="User"
                  className="w-full h-full object-cover overflow-hidden rounded-full"
                  priority
                />
                <span className="absolute bottom-0 right-0 z-10 h-2.5 w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"></span>
              </span>

              <div className="flex flex-col overflow-hidden text-center sm:text-left">
                <div className="mb-0.5 block text-xs sm:text-theme-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Jocelyn Kenter
                  </span>
                  <span className="block text-xs truncate">requests permission to change</span>
                </div>
                <div className="font-medium text-xs truncate text-gray-800 dark:text-white/90 mb-0.5">
                  Project - Nganter App
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 text-[11px] sm:text-theme-xs text-gray-500 dark:text-gray-400">
                  <span>Project</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>15 min ago</span>
                </div>
              </div>
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex flex-col items-center sm:items-start sm:flex-row gap-2 rounded-lg border-b border-gray-100 p-2 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5 sm:gap-3 sm:p-3 sm:px-4.5 sm:py-3"
              href="#"
            >
              <span className="relative flex-shrink-0 block w-10 h-10 rounded-full sm:h-10 sm:w-10">
                <Image
                  width={40}
                  height={40}
                  src="/images/P1.png"
                  alt="User"
                  className="w-full h-full object-cover overflow-hidden rounded-full"
                  priority
                />
                <span className="absolute bottom-0 right-0 z-10 h-2.5 w-2.5 rounded-full border-[1.5px] border-white bg-error-500 dark:border-gray-900"></span>
              </span>

              <div className="flex flex-col overflow-hidden text-center sm:text-left">
                <div className="mb-0.5 block text-xs sm:text-theme-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Brandon Philips
                  </span>
                  <span className="block text-xs truncate">requests permission to change</span>
                </div>
                <div className="font-medium text-xs truncate text-gray-800 dark:text-white/90 mb-0.5">
                  Project - Nganter App
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 text-[11px] sm:text-theme-xs text-gray-500 dark:text-gray-400">
                  <span>Project</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>1 hr ago</span>
                </div>
              </div>
            </DropdownItem>
          </li>
          {/* Add more items as needed */}
        </ul>
        <div className="pt-2 mt-2 text-center border-t border-gray-100 dark:border-gray-700 sm:pt-3 sm:mt-3">
          <Link
            href="/notifications"
            className="text-xs text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white/90 sm:text-theme-sm inline-block"
          >
            View all notifications
          </Link>
        </div>
      </Dropdown>
    </div>
  );
}
