import React from "react";
import { useEffect } from "react";

const Presets = ({
  user,
  freq,
  setFreq,
  setCurrentCity,
  setCurrentStation,
  stationData,
}) => {
  const favoriteStations = user?.favStations || [];

  const tuneToPreset = async (event) => {
    setCurrentCity(event.target.getAttribute("data-city"));
    setFreq(event.target.getAttribute("data-freq"));
  };

  useEffect(() => {
    const updateStation = async () => {
      if (freq && freq !== undefined) {
        setCurrentStation(stationData[freq]);
      }
    };

    updateStation();
  }, [freq, setCurrentStation]);

  return (
    <div className="favContainer pr-16">
      <h3 className="pl-3 font-oleo-script text-[#ffa62e]">
        {user.firstName}'s Favorite Stations
      </h3>
      <div className="favButtons flex flex-col ">
        {favoriteStations.map((station, index) => (
          <button
            data-city={station.city}
            data-freq={station.frequency}
            onClick={tuneToPreset}
            key={index}
            className="m-2 bg-[#2d3033] text-[#ff622e] rounded-md text-xl font-mono"
          >
            {station.city}, {station.name}, {station.frequency},
          </button>
        ))}
      </div>
    </div>
  );
};

export default Presets;