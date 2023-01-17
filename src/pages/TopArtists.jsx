import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { ArtistCard , Loader , Error} from "../components";
import { useGetTopChartsQuery as topCharts } from "../redux/services/shazamCore";

const TopArtists = () => {
 
  const {
    data: TopartistData,
    isFetching,
    error,
    isError,
  } = topCharts();


  if (isError) return <Error error={error.status} />;
  if (isFetching) return <Loader />;
  else {
    return (
      <div className={`flex flex-col `}>
        <h2 className={`font-bold text-3xl text-white text-left mt-4 mb-10`}>
          Around You
        </h2>
        <div
          className={`flex flex-wrap sm:justify-start justify-center gap-8 text-white `}
        >
          {TopartistData?.map((track, index) => {
            return (
              <ArtistCard
                track={track}
                key={track.key}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default TopArtists;
