import { useNavigation } from "react-router-dom";
const ArtistCard = ({ track, index }) => {
  const navigate = useNavigation();
  return (
    <div
      onClick={()=> navigate(`/artists/${track?.artists[0]?.adamid}`)} className={`flex flex-col w-[250px ] p-4 bg-opacity-80 backdrop-blur-lg animate-slideup rounded-lg cursor-pointer `}
    >
      <img src={track?.images?.coverart} classsName={`rounded-lg w-full h-56`} />
      <p className={`mt-4 font-semibold text-lg text-white truncate`}> {track?.subtitle}</p>
    </div>
  );
};

export default ArtistCard;
