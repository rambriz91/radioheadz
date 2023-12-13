import React from 'react';
import { useQuery } from '@apollo/client';


const Presets = ({
  user,
  freq,
  setFreq,
  currentCity,
  setCurrentCity,
  currentStation,
  setCurrentStation,
}) => {
  // do i need the auth here? getting authentication error from graphQL
  console.log('User data from Preset:  ', user);

  const favoriteStations = user?.favStations || [];

  const tuneToPreset = (event) => {
    setCurrentCity(event.target.getAttribute('data-city'));
    setFreq(event.target.getAttribute('data-freq'));
    setCurrentStation(freq);
  };

  return (
    <div>
      <h3 className='font-oleo-script text-[#ffa62e]'>
        {user.firstName}'s Favorite Stations
      </h3>{' '}
      {/* */}
      <div>
        {favoriteStations.map((station, index) => (
          <button
            data-city={station.city}
            data-freq={station.frequency}
            onClick={tuneToPreset}
            key={index}
            className='m-2 bg-[#2d3033] text-[#ff622e] rounded-md text-xl font-mono'
          >
            {station.city}, {station.name}, {station.frequency},
          </button>
        ))}
      </div>
    </div>
  );
};

export default Presets;
