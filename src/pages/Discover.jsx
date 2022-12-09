import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong , isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetTopChartsQuery();
  //Pages Render
  if (isFetching) return <Loader title="loading ..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold bg-none uppercase text-3xl text-white text-left ease-linear">
          Discover 
        </h2>
        <select
          onChange={() => {}}
          className="bg-black p-3 text-gray-300 text-sm rounder-lg outline-none sm:mt-0 mt-5 "
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8 ">
        {data?.map((song, index) => (
          <SongCard key={song.key} song={song} i={index} isPlaying={isPlaying} activeSong={activeSong} data={data}></SongCard>
        ))}
      </div>
    </div>
  );
};
export default Discover;