import React, {useState}from "react";
import { FaFacebookF, FaTwitter, FaYoutube,FaBars,FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    
   const handleNav =()=>{
      setNav(!nav)
    }
  return (
    <div className=" w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80">
      <div className="hidden sm:flex px-4">
        <div className="ml-2 mr-4">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="ml-2 mr-4">
          <NavLink to="/gallery">Gallery</NavLink>
        </div>
        <div className="ml-2 mr-3" >
          <NavLink to="/deal">Deal</NavLink>
        </div>
        <div className="ml-2 mr-4">
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
      <div className="flex justify-between m-3">
        <div className="mx-4">
          <FaFacebookF />
        </div>
        <div className="mx-4">
          <FaTwitter />
        </div>
        <div className="mx-4">
          <FaYoutube />
        </div>
        <div className="mx-4">
          <FaInstagram />
        </div>
      </div>
      <div  onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20}  className="mr-4 cursor-pointer"/>
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/100 px-4 py-7 flex flex-col'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'
        }
      >
        <ul className="w-full h-full text-center pt-12">
          <li className="text-2xl py-8"> 
            <NavLink to='/'> Home</NavLink>
          </li>

          <li className="text-2xl py-8"> 
            <NavLink to='/gallery'>Gallery</NavLink>
          </li>
          <li className="text-2xl py-8"> 
            <NavLink to='/deals'>Deals</NavLink>
          </li>
          <li className="text-2xl py-8"> 
            <NavLink to='/contanct'>Contact</NavLink>
          </li>

        </ul>

      </div>
    </div>
  );
};

export default Navbar;


