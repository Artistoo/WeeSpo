import { useParams } from "react-router-dom";
import { useGetSongBySearchQuery } from "../redux/services/shazamCore";
import { SongCard } from "../components";
import { Error, Loader } from "../components";
import React, { lazy, Suspense } from "react";
import noContent from "../assets/185.png";

const Search = () => {
  const search = Object.values(useParams())[0];
  const { data, isFetching, error, isError } = useGetSongBySearchQuery(search);
  const songs = data?.tracks?.hits?.map((song) => song.track);

  return isFetching ? (
    <Loader />
  ) : (
    <div>
      <h2 className={`block text-white font-[raleway] text-[16px]`}>
        Search Result for{" "}
        <p className=" font-semibold font-[raleway] inline ">{" " + search}</p>{" "}
      </h2>
      {songs?.length ? (
        songs?.map((song) => {
          return <SongCard song={song} key={song.key} />;
        })
      ) : (
        <div className={`flex flex-row-reverse w-full items-center `}>
          <img
            className="h-[300px ] select-none object-fit font-bold w-[300px] m-auto "
            src={noContent}
          />
          <div className="flex translate-y-[40%] gap-10 flex-col items-center">
            <h2 className="text-white   max-w-[400px] text-center text-[20px] uppercase font-[raleway]">
              The Search Result for {search} Returnd No result{" "}
            </h2>
            <button className="text-white bg-gradient-to-bl from-blue-600 to-blue-800 py-1 w-max px-5 text-[14px] rounded-[10px]">DO ANOTHER SEARCH</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
