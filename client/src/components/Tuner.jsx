import { useMutation } from '@apollo/client';
import DropDown from './DropDown';
import AudioPlayer from './AudioPlayer';
import { UPDATE_FAVSTATION } from '../utils/mutations';

const Tuner = ({
  freq,
  setFreq,
  currentCity,
  setCurrentCity,
  currentStation,
  setCurrentStation,
  stationData,
}) => {
  const [updateFavStation, { error }] = useMutation(UPDATE_FAVSTATION);

  const steps = Object.keys(stationData);

  const handleFavStation = async (event) => {
    const stationId = event.target.closest('button').getAttribute('data-id');
    try {
      const { data } = await updateFavStation({
        variables: { stationId },
      });
      console.log('🥷🐢');
    } catch (error) {
      console.error(error);
      console.log('Mutation Failed!');
    }
  };

  //handles the sliding tuner input
  const handleTuner = (event) => {
    const newFreq = parseInt(event.target.value, 10);
    setFreq(parseFloat(steps[newFreq]));

    const station = stationData[steps[newFreq]];
    setCurrentStation(station);
  };
  //Goes to the previous station by looping through the index of station data in descending order.
  const handleTuneLeft = () => {
    if (!currentCity) {
      return;
    }

    const frequencies = Object.keys(stationData);
    const currentIndex = frequencies.indexOf(freq.toString());

    const newIndex =
      (currentIndex - 1 + frequencies.length) % frequencies.length;

    const newFrequency = frequencies[newIndex];
    setFreq(parseFloat(newFrequency));
    setCurrentStation(stationData[newFrequency]);
  };
  //Goes to the next station by looping through the index of station data in ascending order.
  const handleTuneRight = () => {
    if (!currentCity) {
      return;
    }

    const frequencies = Object.keys(stationData);
    const currentIndex = frequencies.indexOf(freq.toString());

    const newIndex = (currentIndex + 1) % frequencies.length;
    const newFrequency = frequencies[newIndex];
    setFreq(parseFloat(newFrequency));
    setCurrentStation(stationData[newFrequency]);
  };
  // handles the logic for the dropdown
  const handleCitySelect = (selectedCity) => {
    setCurrentCity(selectedCity);
  };

  return (
    <div className='pl-12 pr-12 p-6 rounded-md bg-[#2d3033] max-w-screen-lg flex flex-col min-w-[50%]'>
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
        id='city-logo'
        src={
          currentCity === 'San Diego'
            ? '/images/san-diego-logo.png'
            : currentCity === 'Los Angeles'
            ? '/images/Los-Angeles309x193.png'
            : '/images/radioheadz-logo309x193.png'
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
        <h2 className='text-[#ff622e] font-oleo-script flex'>{freq}</h2>
        <button className='bg-transparent' onClick={handleTuneRight}>
          <i className='fa-solid fa-angles-right fa-2xl text-[#ffa62e] hover:text-[#ff622e]'></i>
        </button>
      </div>
      <h3 className='text-[#ff622e] flex justify-center font-mono'>
        {currentStation ? currentStation.callSign : 'Call Sign'}
      </h3>
      <h4 className='text-[#ff622e] flex justify-center font-mono'>
        {currentStation ? currentStation.genre : 'Genre'}
      </h4>
      <AudioPlayer currentStation={currentStation} />
      <div id='tuner-container'>
        <input
          className='w-full'
          value={steps.indexOf(freq.toString())}
          onInput={handleTuner}
          step='1'
          type='range'
          min={0}
          max={steps.length - 1}
          list='markers'
        />
        <datalist id='markers'>
          {steps.map((step) => (
            <option key={step} value={step}>
              {step}
            </option>
          ))}
        </datalist>
      </div>
    </div>
  );
};

export default Tuner;
