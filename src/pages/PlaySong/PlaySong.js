import { useState, useEffect } from "react";
import Player from "./../../components/Player/Player";
import Song from "./../../components/Song/Song";
import Loading from "./../../components/Loading/Loading";
import getSongsFromDb from "./../../mockSongsDb";
import Playlist from "../../components/Playlist/Playlist";
import "./PlaySong.scss";

const PlaySong = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    getSongs();
  }, []);

  async function getSongs() {
    // setTimeout(async () => {
    const fetchedSongs = await getSongsFromDb();
    setSongs(fetchedSongs);

    if (fetchedSongs?.length > 0) {
      setCurrentSong(fetchedSongs[0]);
    }
    // }, 1500);
  }

  const areSongsLoaded = songs && songs.length && currentSong;

  return areSongsLoaded ? (
    <div className="playsong">
      <div className="playContainer">
        <Song currentSong={currentSong} />
        <Player songs={songs} currentSong={currentSong} />
      </div>
      <Playlist />
    </div>
  ) : (
    <Loading />
  );
};

export default PlaySong;
