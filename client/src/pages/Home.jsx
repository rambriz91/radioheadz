import Tuner from "../components/Tuner";
import Presets from "../components/Presets";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { QUERY_STATIONS, QUERY_USER } from "../utils/queries";
import AuthUtil from "../utils/auth";
import { useAuthRedirect } from "../utils/hooks";

const Home = () => {
  const [freq, setFreq] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [currentStation, setCurrentStation] = useState({});

  const { loading, data } = useQuery(QUERY_STATIONS);
  const stations = data?.stations || [];
  const userProfile = AuthUtil.getProfile(); // pull token form local storage.

  //Filters stations based on the current city.
  const filterStations = stations.filter(
    (station) => station.city === currentCity
  );

  const stationData = [];
  // Sets the frequency property as the key for each station in the array.
  filterStations.forEach((station) => {
    const { frequency, ...rest } = station;
    stationData[frequency] = rest;
  });

  const { loading: stationLoading, data: favStationData } = useQuery(
    QUERY_USER,
    {
      variables: { userId: userProfile?.data?._id },
    }
  );
  const user = favStationData?.user || [];

  useAuthRedirect();
  return (
    <div className="bodyContainer flex justify-center my-2">
      <div>
        {stationLoading ? (
          <div> Loading...</div>
        ) : (
          <Presets
            stationData={stationData}
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
      <div className="flex justify-center items-center">
        {loading ? (
          <div> Loading...</div>
        ) : (
          <Tuner
            stationData={stationData}
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
    </div>
  );
};

export default Home;

/*
import Body from "../components/Body";

import { useAuthRedirect } from "../utils/hooks";

const Home = () => {
  useAuthRedirect();
  return (
    <div className="bodyContainer flex justify-center my-2">
      <Body />
    </div>
  );
};

export default Home;
*/
