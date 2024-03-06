import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white py-4 px-8 flex justify-between items-center ">
      <div className="flex-none">
        <img src="https://ph-files.imgix.net/5919d23c-cf34-45a8-b3f1-42f4988413ce.png?auto=format" alt="Logo" className="w-24 h-auto" />
      </div>
      <div className="flex items-center">
        <button
          className="block md:hidden text-black text-2xl p-2 "
          onClick={toggleMenu}
        >
          {isOpen ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
        </button>
        <ul className={`flex ${isOpen ? "block" : "hidden"} md:flex`}>
          <li className="mr-6"><a href="#" className="text-gray-800 hover:text-blue-600">Crypto Taxes</a></li>
          <li className="mr-6"><a href="#" className="text-gray-800 hover:text-blue-600">Free Tools</a></li>
          <li className="mr-6"><a href="#" className="text-gray-800 hover:text-blue-600">Resource Center</a></li>
        </ul>
        <button className="hidden md:block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Get Started</button>
      </div>
    </header>
  );
}

export default Header;
