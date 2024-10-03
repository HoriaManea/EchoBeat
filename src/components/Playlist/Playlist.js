import React from "react";
import { useEffect, useState } from "react";
import "./Playlist.scss";
import { getSongsFromDb } from "../../mockSongsDb";
import SongContainer from "./SongContainer";

function Playlist() {
  const [data, setData] = useState(null); // State pentru date
  const [loading, setLoading] = useState(true); // State pentru încărcare
  const [error, setError] = useState(null); // State pentru erori

  const fetchData = async function () {
    try {
      setLoading(true);
      const songs = await getSongsFromDb();
      setData(songs);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(function () {
    fetchData();
  }, []);

  return (
    <div className="playlist">
      {data?.map((song) => (
        <SongContainer
          songName={song.name}
          artist={song.artist}
          cover={song.cover}
          key={song.id}
        />
      ))}
    </div>
  );
}

export default Playlist;
