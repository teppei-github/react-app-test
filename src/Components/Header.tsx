import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-lg font-bold">ロゴ</div>
        <nav className="hidden md:flex space-x-4">
          <a href="/login" className="hover:text-gray-400">
            ログイン
          </a>
          <a href="/signup" className="hover:text-gray-400">
            会員情報
          </a>
          <a href="/mypage" className="hover:text-gray-400">
            マイページ
          </a>
        </nav>
        <div className="md:hidden">
          <button id="menu-btn" className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div id="mobile-menu" className="md:hidden bg-gray-800">
        <a href="#" className="block px-4 py-2 hover:bg-gray-700">
          ログイン
        </a>
        <a href="#" className="block px-4 py-2 hover:bg-gray-700">
          会員情報
        </a>
        <a href="#" className="block px-4 py-2 hover:bg-gray-700">
          マイページ
        </a>
      </div>
    </header>
  );
};

export default Header;
