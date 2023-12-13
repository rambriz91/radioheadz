import { useState } from 'react';
import { useMutation } from '@apollo/client';
import DropDown from './DropDown';
import AudioPlayer from './AudioPlayer';
import { UPDATE_FAVSTATION } from '../utils/mutations';

const Tuner = ({ stations }) => {
  const [freq, setFreq] = useState(92.5);
  const [currentStation, setCurrentStation] = useState({});
  const [currentCity, setCurrentCity] = useState('');
  const [updateFavStation, { error }] = useMutation(UPDATE_FAVSTATION);

  const filterStations = stations.filter(
    (station) => station.city === currentCity
  );

  console.log(filterStations);
  const stationData = [];
  filterStations.forEach((station) => {
    const { frequency, ...rest } = station;
    stationData[frequency] = rest;
  });

  const handleFavStation = async (event) => {
    const stationId = event.target.closest('button').getAttribute('data-id');
    console.log('Station ID:', stationId);
    try {
      const { data } = await updateFavStation({
        variables: { stationId },
      });
      console.log('Mutation Result:', data);
      console.log('🥷🐢');
    } catch (error) {
      console.error(error);
      console.log('Mutation Failed!');
    }
  };

  const handleTuner = (event) => {
    const newFreq = parseFloat(event.target.value);
    setFreq(newFreq);

    const station = stationData[newFreq];
    setCurrentStation(station);
  };

  const handleTuneLeft = () => {
    const frequencies = Object.keys(stationData);
    const currentIndex = frequencies.indexOf(freq.toString());

    const newIndex =
      (currentIndex - 1 + frequencies.length) % frequencies.length;

    const newFrequency = frequencies[newIndex];
    setFreq(parseFloat(newFrequency));
    setCurrentStation(stationData[newFrequency]);
  };

  const handleTuneRight = () => {
    const frequencies = Object.keys(stationData);
    const currentIndex = frequencies.indexOf(freq.toString());

    const newIndex = (currentIndex + 1) % frequencies.length;
    const newFrequency = frequencies[newIndex];
    setFreq(parseFloat(newFrequency));
    setCurrentStation(stationData[newFrequency]);
  };

  const handleCitySelect = (selectedCity) => {
    setCurrentCity(selectedCity);
  };

  return (
    <div className='p-3 rounded-md bg-[#2d3033] max-w-screen-md w-1/2 flex flex-col justify-center'>
      <div className='flex justify-between'>
        <DropDown onSelectCity={handleCitySelect} />
        {currentStation._id === null ? (
          <button
            className='rounded-md bg-[#505458] hover:bg-gray-50'
            onClick={handleFavStation}
          >
            <i className='fa-solid fa-heart fa-xl text-[#db0d06]'></i>
          </button>
        ) : (
          <button
            className='rounded-md bg-[#505458] hover:bg-gray-50'
            onClick={handleFavStation}
            data-id={currentStation._id}
          >
            <i className='fa-solid fa-heart fa-xl text-[#db0d06]'></i>
          </button>
        )}
      </div>
      <img
        src={
          currentCity === 'San Diego'
            ? '/images/sandiegoSidebar.png'
            : currentCity === 'Los Angeles'
            ? '/images/Los-Angeles.png'
            : '/images/radioheadz-high-resolution-logo-transparent.png'
        }
        alt={currentCity}
      />
      <h2 className='text-[#ffa62e] font-oleo-script flex justify-center p-1 m-2'>
        {currentStation ? currentStation.name : 'Station Name'}
      </h2>
      <div className='flex justify-around p-4'>
        <button className='bg-transparent' onClick={handleTuneLeft}>
          <i className='fa-solid fa-angles-left fa-2xl text-[#ffa62e] hover:text-[#ff622e]'></i>
        </button>
        <h2 className='text-[#ff622e] flex'>{freq}</h2>
        <button className='bg-transparent' onClick={handleTuneRight}>
          <i className='fa-solid fa-angles-right fa-2xl text-[#ffa62e] hover:text-[#ff622e]'></i>
        </button>
      </div>
      <h3 className='text-[#ff622e] flex justify-center'>
        {currentStation ? currentStation.callSign : 'Call Sign'}
      </h3>
      <h4 className='text-[#ff622e]  flex justify-center'>
        {currentStation ? currentStation.genre : 'Genre'}
      </h4>
      <AudioPlayer currentStation={currentStation} />
      <div id='tuner-container'>
        <input
          className='w-full'
          value={freq}
          onInput={handleTuner}
          step='0.1'
          type='range'
          min='88.0'
          max='108.0'
          list='markers'
        />
        <datalist id='markers'>
          <option value='88.0'>88.0</option>
          <option value='90.0'>90.0</option>
          <option value='92.0'>92.0</option>
          <option value='94.0'>94.0</option>
          <option value='96.0'>96.0</option>
          <option value='98.0'>98.0</option>
          <option value='100.0'>100.0</option>
          <option value='102.0'>102.0</option>
          <option value='104.0'>104.0</option>
          <option value='106.0'>106.0</option>
          <option value='108.0'>108.0</option>
        </datalist>
      </div>
    </div>
  );
};

export default Tuner;
