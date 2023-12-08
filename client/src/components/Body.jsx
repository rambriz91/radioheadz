import Tuner from './Tuner';
import { useQuery } from '@apollo/client';
import { QUERY_STATIONS } from '../utils/queries';
const Body = () => {
  const { loading, data } = useQuery(QUERY_STATIONS);
  const stations = data?.stations || [];
  return (
    <div style={{ display: 'flex' }}>
      <div>
        {loading ? <div> Loading...</div> : <Tuner stations={stations} />}
      </div>
    </div>
  );
};

export default Body;
