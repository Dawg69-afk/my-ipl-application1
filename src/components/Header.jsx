import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function Header() {
  const [isopen, setIsOpen] = useState(false);
  const link = [
    { name: "Live score", path: "/live-score" },
    { name: "Schedule", path: "/schedule" },
    { name: "Teams", path: "/teams" },
    { name: "Stats", path: "/stats" },
    { name: "News", path: "/news" },
  ];
  const toggleMenu = () => {
    setIsOpen(!isopen);
  };
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[20px]">
          <Link className="flex items-center space-x-2">
            <div className="h-[20px] w-[20px] bg-orange-300 rounded-full flex items-center justify-center">
              <span className="text-[12px] text-white font-bold">IPL</span>
            </div>
            <span className="text-black font-bold text-md">Score Tracker</span>
          </Link>
          {/*Desktop*/}
          <div className="hidden md:flex space-x-7">
            {link.map((link, index) => (
              <Link
                to={link.path}
                key={index}
                className={
                  "text-[16px] text-black font-bold transition-colors hover:text-orange-600"
                }
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/*Mobile*/}
          <button
            className="md:hidden p-2 rounded-md text-blue-500 hover:text-red-500"
            onClick={toggleMenu}
          >
            {isopen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {/*mobile navlinks*/}
        {isopen && (
          <div className="md:hidden py-3 border-t">
            <div className="flex flex-col space-y-4">
              {link.map((items, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-sm font-bold transition:color hover:text-orange-600"
                >
                  {items.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
