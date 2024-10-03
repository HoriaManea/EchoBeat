import React from "react";

import "./song.scss";

import songThumbnail from "./../../assets/images/song-thumbnail.jpg";

const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      <div
        className="song-thumbnail"
        style={{ backgroundImage: `url("${songThumbnail}")` }}
      ></div>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
