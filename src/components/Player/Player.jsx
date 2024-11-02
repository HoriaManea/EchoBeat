import React, { useRef, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./player.scss";

import { AiOutlineBackward, AiOutlineForward } from "react-icons/ai";

const Player = ({ onNextSong, currentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    progress: 0,
  });
  const audioRef = useRef(null);

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    if (currentTime && duration) {
      setSongInfo({
        ...songInfo,
        currentTime,
        duration,
        progress: Math.floor((currentTime / duration) * 100),
      });
    }
  };

  const onEndHandler = () => setIsPlaying(false);

  const convertToMinutes = useCallback((timeInSeconds) => {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = Math.floor(timeInSeconds % 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${seconds}`;
  }, []);

  const progressTimes =
    convertToMinutes(songInfo.currentTime) +
    " | " +
    convertToMinutes(songInfo.duration);

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  return (
    <div className="player">
      <div className="time-control">
        <input
          type="range"
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={dragHandler}
        />
        <p>{progressTimes}</p>
      </div>

      <div className="play-control">
        <AiOutlineBackward size={50} className="back-twice" />
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        {isPlaying ? (
          <FontAwesomeIcon
            onClick={playSongHandler}
            className="play"
            size="2x"
            icon={faPause}
          />
        ) : (
          <FontAwesomeIcon
            onClick={playSongHandler}
            className="play"
            size="2x"
            icon={faPlay}
          />
        )}
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
        <AiOutlineForward className="skip-twice" size={50} onClick={onNextSong} />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onEnded={onEndHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
