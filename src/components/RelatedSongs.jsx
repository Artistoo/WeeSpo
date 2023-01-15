import {} from "../redux/services/shazamCore";
import SongBar from "./SongBar";
import { useParams } from "react-router-dom";
const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,
}) => {
  const { songid } = useParams();

  return (
    <div className="flex flex-col ">
      <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
      <div className={`mt-6 w-full flex flex-col`}>
        {data?.map((song, i) => (
          <SongBar
            key={`${song.key}-${artistId}`}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedSongs;
