import { Link } from "react-router-dom";
import { useState } from "react ";
const DetailsHeader = ({ songData, artistId, artistData }) => {
  const ArtistDetails = artistData?.data[0]?.attributes;
  // const TheArtist = artistData?.artists[artistId]?.attributes;
  const [length, setLength] = useState(20);
  const [clicked, setClicked] = useState(false);

  return (
    <div className={`relative w-full flex flex-col`}>
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
      <div className="absolute inset-0 flex items-center">
        <img
          src={
            artistId
              ? (() => {
                  return ArtistDetails?.artwork?.url;
                })()
              : songData?.images?.coverart
          }
          className={`sm:w-48 select-none w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black`}
          alt="artwork"
        />
        <div  className={` top-[-50px] relative w-[450px] ml-10`}>
          <p className={`font-bold sm:text-3xl text-xl text-white relative `}>
            {artistId ? ArtistDetails?.name : songData?.title}
          </p>

          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className={`text-gray-100 text-base mt-2`}>
                {songData?.subtitle}
              </p>
            </Link>
          )}

          <p className={`text-gray-100 text-base mt-2`}>
            {artistId
              ? ArtistDetails?.genreNames[0]
              : songData?.genres?.primary}
          </p>
          {artistId ? (
            <p
              className={`text-[raleway] font-[13px] text-gray-300 min-w-[100px]  absolute select-none  top-30 my-[10px] `}
            >
              {" "}
              {ArtistDetails.artistBio &&
                ArtistDetails.artistBio
                  .split(" ")
                  .slice(0, length)
                  .join(" ")
                  .concat(" ...")}{" "}
              <b
                onClick={() => {
                  setLength((current) =>
                    !clicked ? (current = 35) : (current = 20)
                  );

                  setClicked((current) => (current = !current));
                }}
                className="text-bold text-blue-500 cursor-pointer "
              >
                {ArtistDetails.artistBio ? clicked ?  "Less" : "More" : (<p className={`cursor-default`}>No BIO AVAILABLE</p>) }
              </b>
            </p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
      <div className="w-full sm:h-44 h-24" />
    </div>
  );
};

export default DetailsHeader;
