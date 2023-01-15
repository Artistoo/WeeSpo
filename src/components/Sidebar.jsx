import { Context, useEffect } from "react";
import { logo } from "../assets";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { links } from "../assets/constants";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination"




const NavLinks = ({ handleClick , device }) => {

  return (
    <div className={`mt-10 flex flex-col pl-10 `}>
      <Swiper
        slidesPerView= {device ? `4` : '3'}
        mousewheel={true}
        direction="vertical"
        loop = {true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className= ' h-[250px] w-[150px] flex items-center justify-around'
      >
        {links.map((option, index) => (
          <SwiperSlide
            key={option.name}
            style={{
              height: "30%",
              display: "flex ",
              alignItems: "center ",
              justifyContent: "start ",
            }}
            className={`animate-slideup`}
          >
            <NavLink
              onClick={() => handleClick && handleClick()}
              to={option.to}
              className="flex flex-row-reverse animate-slideup ease-linear items-center text-sm font-medium text-gray-400 cursor-pointer hover:text-cyan-400"
            >
              {option.name}
              <option.icon className="w-6  h-6 mr-4" />
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { isFetching } = useGetTopChartsQuery();
  return (
    <>
      {/* Desktop Display  */}
      <div
        className={` backdrop-blur-lg md:flex hidden flex-col w-[240px] py-10 px-4 bg-gradient-to-t from-[#140c41ee] to-[#05044b]  ${
          isFetching && `md:hidden`
        } `}
      >
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks device ={true} handleClick={() => setOpen(true)} />
      </div>



      {/* Small Devices Display  */}
      <div
        className={`absolute left-[90%] mt-5 z-[100] md:hidden ${
          isFetching && `hidden`
        }`}
      >
        <div
          className={`absolute -top-5 h-[100vh]  w-[350px] backdrop-blur-lg bg-[#19162496] overflow-scroll  ${
            open ? `left-[-250px]` : `left-[100px]`
          } transition-all`}
        >
          <img
            src={logo}
            alt="logo"
            className="w-full h-14 object-contain pt-5"
          />
          <NavLinks device={false} handleClick={() => setOpen(true)} />
        </div>

        {/* open Close Functionality */}
        {!open ? (
          <HiOutlineMenu
            onClick={() => 
              setOpen(true)
            }
            className=" absolute mt-3 selection:bg-transparent  cursor-pointer text-white w-6 h-6 mr-5"
          />
        ) : (
          <RiCloseLine
            onClick={() => 
           
              setOpen(false)
            
            
            }
            className="absolute mt-3 cursor-pointer text-white w-6 h-6 mr-5 "
          />
        )}
      </div>
    </>
  );
};
export default Sidebar;
