import React from "react";

const Header = () => {
  return (
    <header className="w-full">
      <nav className="bg-gray-700 text-center">
        <div className="text-white p-2 w-full">
        <ul className="w-full justify-center flex flex-wrap">
          <li className="p-2 border rounded m-2">
            <a href="/">Home</a>
          </li>
          <li className="p-2 border rounded m-2">
            <a href="/users">Users</a>
          </li>
          <li className="p-2 border rounded m-2">
            <a href="/removespaces">remove spaces</a>
          </li>
          <li className="p-2 border rounded m-2">
            <a href="/addkeyword">Add Keyword</a>
          </li>
          <li className="p-2 border rounded m-2">
            <a href="/hooks">Hooks</a>
          </li>
        </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
