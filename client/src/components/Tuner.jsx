
import PlayerControls from "./Controls";
import TunerBar from "./TunerBar";


const Tuner = (stations) => {
console.log(stations)
  return (
    <div className="flex flex-col items-center" >
      <div id="radio-container">
        <h2 id="name">{stations.name}</h2>
        <div id="frequency">
          <h2>{stations.frequency}</h2>
        </div>
        <h3 id="station">{stations.callSign}</h3>
        <h4 id="genre">{stations.genre}</h4>
        <audio id="audio" controls src="{stations.url}"></audio>
      </div>
      <TunerBar />
      <PlayerControls />
    </div>
  );
};

export default Tuner;



