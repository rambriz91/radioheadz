import React from "react";
import { useQuery } from "@apollo/client";

const Presets = ({ user }) => {
  // do i need the auth here? getting authentication error from graphQL
  console.log("User data from Preset:  ", user);

  const favoriteStations = user?.favStations || [];

  return (
    <div>
      <h3>{user.firstName}'s Favorite Stations</h3> {/* */}
      <div>
        {favoriteStations.map((station, index) => (
          <button key={index} className="m-2">
            {station.city}, {station.name}, {station.frequency},
          </button>
        ))}
      </div>
    </div>
  );
};

export default Presets;
