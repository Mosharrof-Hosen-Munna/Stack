import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="xl:container mx-auto px-4 sticky top-0 ">
      <div className="flex items-center justify-between py-7 px-20">
        <div className="flex items-center">
          <FontAwesomeIcon
            className="text-2xl text-blue-400 font-bold mr-2"
            icon={faBook}
          />
          <h1 className="text-2xl font-bold " style={{ color: "#4E5D78" }}>
            Stack
          </h1>
        </div>
        <div>
          <div class="relative inline-block text-left">
            <div>
              <button
                type="button"
                class="inline-flex w-full justify-center items-center gap-x-1.5 rounded-xl bg-secondary px-3 py-2 text-xs font-semibold text-gray-500 shadow-sm  outline-none border-0 "
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => setShowMenu(!showMenu)}
              >
                English (UK)
                <svg
                  class="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              class={`absolute transition ease-out duration-100 ${
                showMenu
                  ? "transform opacity-100 scale-100"
                  : "transform opacity-0 scale-95"
              } right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  French
                </a>
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                >
                  Bengali
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
