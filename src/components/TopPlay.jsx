import PlayPause from "./PlayPause";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useRef , useEffect } from "react";
import { FreeMode } from "swiper";



import "swiper/css";
import "swiper/css/free-mode";

const Effect = (effect, action) => {
  return action
    .split(" ")
    .map((addB4) => `${effect}:${addB4}`)
    .join(" ");
};



//Top ChartCard Component Render
const TopChartCard = ({
  song,
  index,
  styling,
  handlePauseClick,
  handlePlayClick,
  isPlaying,
  activeSong
}) => (
  <div
    className={`justify-between w-full xl:w-[400px] p-5 self-center h-[75px] mt-0 flex flex-row items-center ${Effect(
      "hover",
      "bg-black backdrop-blur-lg"
    )}  rounded-lg cursor-pointer mb-1`}
  >

    <h3
      className={`text-white mr-2 aspect-square w-6  text-center rounded-full backdrop-blur-3xl `}
    >
      {index + 1}
    </h3>
    <div className="flex-1 gap-10 flex flex-row justify-between items-center">
      <img
        className="w-[70px]  aspect-square rounded-sm"
        src={song?.images?.coverart}
        alt="song"
      />
      <div className="flex-1 flex flex-col jus">
        <Link to={`/songs/${song.key}`}>
          <p className={styling}>{song.title}</p>
        </Link>

        <Link  to={`/song/${song.artists[0].adamid}`}>
          <p className="text-thin text-sm text-gray-400 mt-3">
            {song.subtitle}
          </p>
        </Link>
      </div>
    </div>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </div>
);















//TopPlay Component Render
const TopPlay = () => {
  const { log } = console;
  const H2Class = (tag) =>
    `${
      tag == "h"
        ? "text-white uppercase font-semibold"
        : "text-orange-400 uppercase font-semibold"
    }`;
  const { data, isFetching } = useGetTopChartsQuery();
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector(state => state.player);
  const divRef = useRef(null);
  const topPlayedSongs = data && data.filter(x => x.images).slice(0, 5);




  const handlePlayClick = (song , i)=> {
    dispatch(setActiveSong({song , data , i}))
    dispatch(playPause(true))
  }
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  let firstLoad = true ; 
  

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  } , []);










  return (
    <div
      ref={divRef}
      className={`xl:ml-6 gap-2 ml-5 xl:mb-0 animate-slideItUp mb-6 flex-1 xl:max-x-[400px] xl:w-[500px] max-w-full animate-slidedown top-[-10px] relative flex flex-col  ${
        isFetching && `hidden`
      }`}
    >
      <div className={`flex flex-col gap-[2rem]`}>
        <div
          /* topCharts */ className=" text-center flex flex-row justify-between items-center xl:justify-evenly translate-y-5 xl:gap-11 w-[550px]"
        >
          <h2 className={H2Class("h")}>Top Charts</h2>
          <Link to="/top-charts">
            <p className={`${H2Class("p")}  `}>see More</p>
          </Link>
        </div>

        <div className="mt-0   flex flex-col gap-1">
          {topPlayedSongs?.map((song, i) => (
            <TopChartCard
              styling={`text-white uppercase font-thin text-base`}
              key={song.key}
              song={song}
              index={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={()=> handlePlayClick(song , i)}
            />
          ))}
        </div>
      </div>

      {/* Top Artists (Swiper) */}
      <div className="flex flex-col mt-5 relative  justify-center align-center    ">
        <div className={` mb-5 w-[100%] m-auto flex flex-row justify-around relative	xl:top-[-27px] items-center text-white gap-10 font-semibold xl:justify-around	 text-[17px]`}>
          <p className="text-white ">More</p>
          <p className="text-orange-400">Charts </p>
        </div>
        <Swiper
          spaceBetween={5}
          modules={[FreeMode]}
          freeMode
          centeredSlides
          centeredSlidesBounds
          slidesPerView="4"
          className="mt-0 justify-center  md:w-[600px]  md:h-[150px] xl:h-[100px]  xl:top-[-35px] align-center  relative flex align-center  h-[120px] m-auto  xl:w-[370px] w-[80vw]   "
        >
          {topPlayedSongs?.map((song, index) => (
            <SwiperSlide
              key={song.key}
              style={{
                position : 'relative', 
                margin: "15px",
                height: '110%', 
                width: "20%",
                alignSelf: "start",
                position: "relative",
                top: "2px",
              }}
            >
              <Link to={`/artists/${song?.artists[0]?.adamid}`}>
                <img
                  className="rounded-full object-cover  h-[80%] aspect-square "
                  src={song?.images?.background}
                  alt="IMAGE"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
