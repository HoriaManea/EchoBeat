import React from "react";
import "./Home.scss";
import { useState, useEffect } from "react";
import { getSongsFromDb } from "../../mockMostPopular";
import Song from '../../components/Song/Song';

function Home() {
  const [songs, setSongs] = useState([]);

  useEffect(function () {
    async function fetchSongs() {
      const res = await getSongsFromDb();
      setSongs(res);
    }

    fetchSongs();
  }, []);

  return (
    <section className="most-popular-songs-page">
      <h1>Most popular songs</h1>
      <div className="most-popular-songs-container">
        {songs.map((song) => (
          <Song key={song.id} song={song} classes="popular-song" />
        ))}
      </div>
    </section>
  );
}

export default Home;
