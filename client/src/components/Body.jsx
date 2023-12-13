import Tuner from './Tuner';
import Presets from '../components/Presets';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { QUERY_STATIONS, QUERY_USER } from '../utils/queries';
import AuthUtil from '../utils/auth';

const Body = () => {
  const [freq, setFreq] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [currentStation, setCurrentStation] = useState({});

  const { loading, data } = useQuery(QUERY_STATIONS);
  const stations = data?.stations || [];
  const userProfile = AuthUtil.getProfile(); // pull token form local storage.

  console.log('userProfile: ', userProfile);

  const { loading: stationLoading, data: stationData } = useQuery(QUERY_USER, {
    variables: { userId: userProfile?.data?._id },
  });
  const user = stationData?.user || [];

  return (
    <>
      <div>
        {stationLoading ? (
          <div> Loading...</div>
        ) : (
          <Presets
            currentStation={currentStation}
            setCurrentStation={setCurrentStation}
            currentCity={currentCity}
            setCurrentCity={setCurrentCity}
            freq={freq}
            setFreq={setFreq}
            user={user}
          />
        )}
      </div>
      <div className='flex w-full justify-start h-full'>
        {loading ? (
          <div> Loading...</div>
        ) : (
          <Tuner
            currentStation={currentStation}
            setCurrentStation={setCurrentStation}
            currentCity={currentCity}
            setCurrentCity={setCurrentCity}
            freq={freq}
            setFreq={setFreq}
            stations={stations}
          />
        )}
      </div>
    </>
  );
};

export default Body;
