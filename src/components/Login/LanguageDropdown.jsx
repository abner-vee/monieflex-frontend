import React, { useState } from "react";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-center items-center rounded-md px-4 py-2 bg-transparent text-sm font-medium text-white focus:outline-none"
        >
          {selectedLanguage}
          <svg
            className="ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <button
              onClick={() => selectLanguage("EN")}
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
              role="menuitem"
              tabIndex="-1"
            >
              EN
            </button>
            <button
              onClick={() => selectLanguage("FR")}
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
              role="menuitem"
              tabIndex="-1"
            >
              FR
            </button>
            <button
              onClick={() => selectLanguage("DE")}
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
              role="menuitem"
              tabIndex="-1"
            >
              DE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
