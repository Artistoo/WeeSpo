import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, activeSong, isPlaying, i  , data}) => {
  const dispatch = useDispatch(); 


  const handlePlayClick = ()=> {
    dispatch(setActiveSong({song , data , i}))
    dispatch(playPause(true))
  }

  const handlePauseClick = ()=> {
    dispatch(playPause(false))
  }

  if(Object.values(song).join('').includes('unholy')){
    return 
  } else{
    return (
      <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-lg cursor-pointer text-center ">
        <div className="relative w-full h-56 group">
          <div
            className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
              activeSong?.title == song.title ? `flex bg-opacity-70` : `hidden`
            }`}
          >
            <PlayPause
              isPlaying={isPlaying}
              activeSong={activeSong}
              song={song}
              handlePause={handlePauseClick}
              handlePlay= {handlePlayClick}
            />
          </div>
          <img alt="song-img" src={song.images?.coverart} />
        </div>
        <div className="relative mt-4 flex flex-col ">
          <p className="text-lg font-semibold uppercase text-white truncate ">
            <Link to={`/songs/${song?.key}`}>{song.title}</Link>
          </p>
          <p className="text-sm text-gray-300 mt-1 truncate">
            <Link
              to={
                song?.artists
                  ? `/artists/${song?.artists[0]?.adamid}`
                  : `/top/artists`
              }
            >
              {song.subtitle}
            </Link>
          </p>
        </div>
      </div>
    );
  }

  
};

export default SongCard;
