import { useState, useEffect } from "react";
import Player from "./../../components/Player/Player";
import Song from "./../../components/Song/Song";
import Loading from "../../components/Loading/Loading";
import getSongsFromDb from "./../../mockSongsDb";
import Playlist from "../../components/Playlist/Playlist";
import "./PlaySong.scss";

const PlaySong = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(0);

  useEffect(() => {
    getSongs();
  }, []);

  async function getSongs() {
    const fetchedSongs = await getSongsFromDb();
    setSongs(fetchedSongs);
  }

  const onNextSong = () => setCurrentSong(currentSong + 1);

  const areSongsLoaded = songs && songs.length && currentSong >= 0;

  return areSongsLoaded ? (
    <main className="play-song">
      <section className="play-song__container">
        <Song song={songs[currentSong]} className={"play-song-details"} />
        <Player onNextSong={onNextSong} currentSong={songs[currentSong]} />
      </section>
      <Playlist songs={songs} currentSong={currentSong} />
    </main>
  ) : (
    <Loading />
  );
};

export default PlaySong;
