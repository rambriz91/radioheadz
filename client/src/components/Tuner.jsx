// import React, { useState, useEffect } from 'react';
// import playerControls from './Controls';
// import AudioPlayer from 'react-h5-audio-player';
// import "react-h5-audio-player/lib/styles.css";


// // function Tuner(props) {
// //   return (
// //     <div>

// //       <h1 className='text-4xl flex-justify-center font-bold underline inline border-b-4 border-blue-400'>Tuner RadioHeadz</h1>
// //     <AudioPlayer />
// //     </div>

// //   )
// // }
import { useQuery } from "@apollo/client";
import { QUERY_STATIONS } from "../utils/queries"
import PlayerControls from "./Controls";
import TunerBar from "./TunerBar";


const Tuner = () => {
  const data = useQuery(QUERY_STATIONS);
  const stations = data?.stations || [];

  return (
    <div className="flex flex-col items-center" >
      <TunerBar />
      <PlayerControls />
    </div>
  );
};

export default Tuner;



