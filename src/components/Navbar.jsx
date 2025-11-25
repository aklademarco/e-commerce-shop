import { NavLink } from "react-router";
import { assets } from "../assets/asset";
import { MdArrowOutward, MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full">
      <div className=" container mx-auto flex justify-between py-8 gap-8 px-4 items-center sm:px-4 ">
        <div>
          <img src={assets.logo} alt="brand logo" className="h-10 w-auto" />
        </div>

        <div>
          <ul className="py-2 hidden sm:flex gap-3 text-md text-gray-400">
            <NavLink
              to="/"
              className="border rounded-full p-1 w-24 h-auto flex items-center hover:bg-purple-600 hover:text-white justify-center text-sm focus:text-white focus:bg-purple-600 focus:outline-none "
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="border rounded-full p-1 w-24 h-auto flex items-center hover:bg-purple-600 hover:text-white justify-center text-sm focus:text-white focus:bg-purple-600 focus:outline-none "
            >
              About Us
            </NavLink>
            <NavLink
              to="/shop"
              className="border rounded-full p-1 w-24 h-auto flex items-center hover:bg-purple-600 hover:text-white justify-center text-sm focus:text-white focus:bg-purple-600 focus:outline-none "
            >
              Shop
            </NavLink>
            <NavLink
              to="/frames"
              className="border rounded-full p-1 w-24 h-auto flex items-center hover:bg-purple-600 hover:text-white justify-center text-sm focus:text-white focus:bg-purple-600 focus:outline-none "
            >
              Frames
            </NavLink>
            <NavLink
              to="/contact"
              className="border rounded-full p-1 w-24 h-auto flex items-center hover:bg-purple-600 hover:text-white justify-center text-sm focus:text-white focus:bg-purple-600 focus:outline-none  "
            >
              Contact
            </NavLink>
          </ul>
        </div>

        <NavLink
          to="/join"
          className="hidden sm:flex border rounded-full py-2 px-4 h-auto items-center text-purple-600 justify-center gap-3 text-nowrap"
        >
          Join Our Movement
          <div className="border rounded-full bg-purple-600 text-white h-8 w-8 flex items-center justify-center">
            <MdArrowOutward />
          </div>
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="sm:hidden p-2 rounded-lg text-2xl"
        aria-label="Toggle menu"
      >
        {menuOpen ? <IoMdClose /> : <MdMenu />}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg sm:hidden z-50">
          <div className="flex flex-col gap-2 px-4 py-4">
            <NavLink
              to="/"
              className="border rounded-full p-2 text-center hover:bg-purple-600 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="border rounded-full p-2 text-center hover:bg-purple-600 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/shop"
              className="border rounded-full p-2 text-center hover:bg-purple-600 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </NavLink>
            <NavLink
              to="/frames"
              className="border rounded-full p-2 text-center hover:bg-purple-600 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Frames
            </NavLink>
            <NavLink
              to="/contact"
              className="border rounded-full p-2 text-center hover:bg-purple-600 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
            <NavLink
              to="/join"
              className="border rounded-full p-2 text-center bg-purple-600 text-white"
              onClick={() => setMenuOpen(false)}
            >
              Join Our Movement
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
