import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching: isFetchingArtistDetail, error } = useGetArtistDetailsQuery(artistId);


  if (isFetchingArtistDetail) {
    return <Loader title="Loading artist details" />;
  }

  if (error) return <Error />;

  console.log(Object.values(artistData?.songs));
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />



      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        actuveSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
