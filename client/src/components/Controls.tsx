import React from 'react';
import playMusic from '../assets/play_music.svg';
import nextStation from '../assets/next_station.svg';
import prevStation from '../assets/prev_station.svg';
// import shuffleOff from '../assets/shuffle_off.svg';
// import shuffleStation from '../assets/shuffle_station.svg';



const PlayerControls = () => {
    function onClick() {
        //remove before deploy
    }
    return (
        <div className="flex flex-row mt-4">
            {/* <ImgButton src={shuffleStation} onClick={onClick} /> */}
            <ImgButton src={prevStation} onClick={onClick} />
            <ImgButton className='mr-2 ml-2' src={playMusic} onClick={onClick} />
            <ImgButton src={nextStation} onClick={onClick} />


        </div>
    )
};

export default PlayerControls;

type imgButtonProps = {
    src: string;
    onClick: () => void;
    className?: string;
}

const ImgButton = ({ onClick, src, className }: imgButtonProps) => {
    const buttonSize = 60;
    return (
        <button onClick={onclick}>
            <img
                src={src}
                width={buttonSize}
                height={buttonSize}
                className={`drop-shadow-lg ${className ?? ''}`}
            />
        </button>
    )
}
