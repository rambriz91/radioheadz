import Tuner from './Tuner';
import { useQuery } from '@apollo/client';
import { QUERY_STATIONS } from '../utils/queries';
const Body = () => {
  const { loading, data } = useQuery(QUERY_STATIONS);
  //const { loading, data, refetch } = useQuery(QUERY_FAVORITE_STATIONS);
  const stations = data?.stations || [];
  return (
    <div className='flex w-full justify-center content-center h-full'>
      {loading ? (
        <div> Loading...</div>
      ) : (
        <Tuner stations={stations} 
        //onFavoriteAdded={refetch} 
        />
      )}
    </div>
  );
};

export default Body;
