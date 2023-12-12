import Tuner from './Tuner';
import { useQuery } from '@apollo/client';
import { QUERY_STATIONS } from '../utils/queries';
import { LayoutControlProvider } from '../context/LayoutController';

const Body = () => {
  const { loading, data } = useQuery(QUERY_STATIONS);
  const stations = data?.stations || [];
  return (
    <div className='flex w-full justify-center content-center h-full'>
      {loading ? 
        <div> Loading...</div> 
        :
        <LayoutControlProvider>
            <Tuner stations={stations} />
            { <RadioChat /> }
        </LayoutControlProvider>
        
      }
    </div>
  );
};

export default Body;
