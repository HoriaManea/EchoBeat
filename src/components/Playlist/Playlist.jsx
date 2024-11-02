import Song from '../Song/Song';
import "./Playlist.scss";

const Playlist = ({ songs, currentSong }) => (
  <section className="playlist">
    {songs?.map((song, index) => (
      <Song
      key={index}
        song={song}
        
        classes={"playlist-item" + (currentSong === index ? " selected" : "")}      />
    ))}
  </section>
);

export default Playlist;
