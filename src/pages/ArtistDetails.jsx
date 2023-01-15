import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const {log } = console ; 
  //Retrieving ID from the link using params
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  //Distructering the Retrieved Data
  const {
    data: artistData,
    isFetching: isFetchingRelatedSongs,
    error: RelatedSongsError,
    isError,
  } = useGetArtistDetailsQuery(artistId);



  if (isFetchingRelatedSongs) return <Loader />;
  if (isError) return <Error error={Object.values(RelatedSongsError)[0]} />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />
      <RelatedSongs

        data={Object.values(artistData.data[0].views.playlists.data)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};
export default ArtistDetails;
