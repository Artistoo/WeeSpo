import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import {useGetSongByGenreQuery } from "../redux/services/shazamCore";
import { selectGenreListId } from "../redux/features/playerSlice";
import React from 'react'
const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong , isPlaying  , genreListId } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetSongByGenreQuery(genreListId || 'POP');
  //Pages Render
  if (isFetching) return <Loader title="loading ..." />;
  // if (error) return <Error />;

  
  
  dispatch(selectGenreListId(genreListId))

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold bg-none uppercase text-3xl text-white text-left ease-linear">
          Discover {genreListId || 'POP'}
        </h2>
        <select
          value={genreListId}
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
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