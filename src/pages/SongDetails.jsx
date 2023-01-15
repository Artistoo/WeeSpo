import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, DetailsHeader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import {
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
} from "../redux/services/shazamCore";
import { useState } from "react ";
import Fonts from "../assets/globalFont";

const SongDetails = () => {
  //Retrieve the Id from the link using UseParam
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  //Fetched Data
  const {
    data: songdata,
    isFetching: isFetchingSongData,
    error: songDataError,
  } = useGetSongDetailsQuery({ songid });
  const {
    data: RelatedSongsData,
    isFetching: isFetchingRelatedSongs,
    error: RelatedSongsError,
  } = useGetRelatedSongsQuery({ songid });


  //Dispatch
  const handlePlayClick = (song , i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  return isFetchingSongData || isFetchingRelatedSongs ? (
    <Loader />
  ) : (
    <div className={`flex flex-col`}>
      <Fonts />
      <DetailsHeader artistId="" songData={songdata} />

      <div className={`mb-10 mt-8`}>
        <h2 className={`text-white text-3xl font-bold`}>Lyrics :</h2>
        <div className="mt-5">
          {(isFetchingSongData && <img src={Loader} />) ||
          songdata?.sections[1].type === "LYRICS" ? (
            songdata?.sections[1].text.map((l) => (
              <p
                id={`lyrics`}
                className={`text-gray-200 mt-2 font-[raleway] text-[15.3px]`}
              >
                {l}
              </p>
            ))
          ) : (
            <p>Sorry! no Lyrics Available for this song</p>
          )}
        </div>
      </div>

      <RelatedSongs
        data={RelatedSongsData}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default SongDetails;
