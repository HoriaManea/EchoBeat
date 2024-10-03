import React from "react";
import "./Playlist.scss";

function SongContainer({ cover, artist, songName }) {
  return (
    <div className="container-song">
      <div
        className="song-thumbnail"
        style={{
          backgroundImage: `url("${cover}")`, // Afișează imaginea primită prin prop
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      ></div>
      <h2>{songName}</h2>
      <h3>{artist}</h3>
    </div>
  );
}

export default SongContainer;
