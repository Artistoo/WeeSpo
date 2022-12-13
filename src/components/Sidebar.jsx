import { Context } from "react";
import { logo } from "../assets";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { links } from "../assets/constants";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ handleClick }) => (
  <div className="mt-10 flex flex-col pl-10">
    {links.map((option, index) => (
      <NavLink
        onClick={() => handleClick && handleClick()}
        key={option.name}
        to={option.to}
        className="flex flex-row-reverse justify-end items-center my-8 text-sm font-medium text-gray-400 cursor-pointer hover:text-cyan-400"
      >
        {option.name}
        <option.icon className="w-6 h-6 mr-2" />
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>

      {/* Desktop Display  */}
      <div className=" md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624ef] ">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setOpen(true)} />
      </div>

      {/* Small Devices Display  */}
      <div className="absolute left-[90%] mt-5 z-[100] md:hidden">
        <div className={`absolute  w-[350px] backdrop-blur-lg bg-[#19162496]  ${open ? `left-[100px]` : `-left-[250px]`} transition-all`} >
          <img src={logo} alt="logo" className="w-full h-14 object-contain pt-5" />
          <NavLinks handleClick={() => setOpen(true)} />
        </div>

        {open ? (
          <HiOutlineMenu
            onClick={() => setOpen(false)}
            className=" absolute  cursor-pointer text-white w-6 h-6 mr-5"
          />
        ) : (
          <RiCloseLine
            onClick={() => setOpen(true)}
            className="absolute cursor-pointer text-white w-6 h-6 mr-5 "
          />
        )}
      </div>
    </>
  );
};
export default Sidebar;
