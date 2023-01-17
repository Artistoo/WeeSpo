import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Error, Loader, RelatedSongs, SongCard } from "../components";
import { useGetSongsByCountryQuery as songsByCountry } from "../redux/services/shazamCore";

const AroundYou = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  //Distracturing Data from the Fetched IP adress API
  const { IPv4, country_code, country_name } = country;
  const [error, setError] = useState("");

  const {
    data: dataByCountry,
    isFetching: isFetchingSongsByCountry,
    error: ByCountryError,
    isError,
  } = songsByCountry(country_code);

  const { activeSong, isPlaying } = useSelector((state) => state.player);

  useEffect(() => {
    axios
      .get(`https://geolocation-db.com/json/`)
      .then((res) => setCountry(res?.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [country]);

  if (isError) return <Error error={ByCountryError.status} />;
  if (isFetchingSongsByCountry && loading) return <Loader />;
  else {
    return (
      <div className={`flex flex-col `}>
        <h2 className={`font-bold text-3xl text-white text-left mt-4 mb-10`}>
          Around You
        </h2>
        <div
          className={`flex flex-wrap sm:justify-start justify-center gap-8 text-white `}
        >
          {dataByCountry?.map((song, index) => {
            return (
              <SongCard
                key={song.key}
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default AroundYou;
