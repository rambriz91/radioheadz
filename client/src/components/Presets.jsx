import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const Presets = () => {
  // do i need the auth here? getting authentication error from graphQL
  const data = useQuery(QUERY_USER);
  console.log("Data from Preset: ", data);

  // const user = data?.users || []; // to show name above list of fav stations.
  const favoriteStations = data?.favStations || [];

  return (
    <div>
      <h3>Favorite Stations</h3> {/*{user.usernam}'s  */}
      <div>
        {favoriteStations.map((station, index) => (
          <button key={index} className="m-2">
            {station.name} + 122.3 {station.frequency}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Presets;
