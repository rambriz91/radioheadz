import { useState } from 'react';
import DropDown from './DropDown';

const Tuner = ({ stations }) => {
  const [freq, setFreq] = useState(92.5);
  const [currentStation, setCurrentStation] = useState(null);
  const [currentCity, setCurrentCity] = useState('');

  const filterStations = stations.filter(
    (station) => station.city === currentCity
  );

  const stationData = {};
  filterStations.forEach((station) => {
    const { frequency, ...rest } = station;
    stationData[frequency] = rest;
  });

  const handleTuner = (event) => {
    const newFreq = parseFloat(event.target.value);
    setFreq(newFreq);

    const station = stationData[newFreq];
    setCurrentStation(station);
    console.log(station);
  };

  const handleCitySelect = (selectedCity) => {
    setCurrentCity(selectedCity);
  };

  return (
    <div className='p-3 rounded-md bg-indigo-900 max-w-screen-md w-1/3 flex flex-col justify-center'>
      <div className='flex justify-between'>
        <DropDown onSelectCity={handleCitySelect}/>
        <button className='rounded-md'>
          <i className='fa-solid fa-heart'></i>
        </button>
      </div>

      <h2 className='text-white flex justify-center p-1 m-2'>
        {currentStation ? currentStation.name : 'Station Name'}
      </h2>
      <div className='flex justify-center p-4'>
        <h2 className='text-white flex'>{freq}</h2>
      </div>
      <h3 className='text-white flex justify-center'>
        {currentStation ? currentStation.callSign : 'Call Sign'}
      </h3>
      <h4 className='text-white flex justify-center'>
        {currentStation ? currentStation.genre : 'Genre'}
      </h4>
      <audio
        className='w-full'
        id='audio'
        controls
        src={currentStation ? currentStation.url : ''}
      ></audio>
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
