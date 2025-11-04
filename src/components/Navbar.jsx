

import {NavLink} from 'react-router'
import { assets } from '../assets/asset';
import { MdArrowOutward } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6 mt-2">
      <div>
        <img src={assets.logo} alt="brand logo" className="h-12 w-auto" />
      </div>

      <div>
        <ul className="py-2 hidden sm:flex gap-3 text-md text-gray-600">
          <NavLink className="border  rounded-full p-1 w-24 h-auto flex items-center hover:bg-purple-600 hover:text-white justify-center text-sm">
            <p>Home</p>
          </NavLink>
          <NavLink>
            <p className="border  rounded-full p-1 w-24 h-auto flex items-center hover:bg-purple-600 hover:text-white justify-center text-sm">
              About Us
            </p>
          </NavLink>
          <NavLink className="border  rounded-full p-1 w-24 h-auto flex items-center hover:bg-purple-600 hover:text-white justify-center text-sm">
            <p>Shop</p>
          </NavLink>
          <NavLink className="border  rounded-full p-1 w-24 h-auto flex items-center hover:bg-purple-600 hover:text-white justify-center text-sm">
            <p>Frames</p>
          </NavLink>
          <NavLink className="border  rounded-full p-1 w-24 h-auto flex items-center hover:bg-purple-600 hover:text-white justify-center text-sm">
            <p>Contact</p>
          </NavLink>
        </ul>
      </div>

      <NavLink className="border  rounded-full py-2 px-1 w-58 h-auto flex items-center text-purple-600 justify-center gap-3 text-nowrap">
        <span className="flex items-center gap-3">
          Join Our Movement
          <div className="border rounded-full bg-purple-600 text-white h-8 w-8  flex items-center justify-center">
            <MdArrowOutward />
          </div>
        </span>
      </NavLink>
    </div>
  );
}

export default Navbar
