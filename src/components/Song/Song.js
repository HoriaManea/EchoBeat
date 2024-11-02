import React from "react";

import "./song.scss";

import songThumbnail from "./../../assets/images/song-not-available-thumbnail.jpg";

const Song = ({ song, classes }) => {
  return (
    <article className={"song-container" + (classes ? ` ${classes}` : '')}>
      <div
        className="song-thumbnail"
        style={{ backgroundImage: `url("${song.cover || songThumbnail}")` }}
      ></div>
      <div className="song-details">
        <h1>{song.name}</h1>
        <p>{song.artist}</p>
      </div>
    </article>
  );
};

export default Song;
