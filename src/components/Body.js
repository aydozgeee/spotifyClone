import React from 'react'
import '../styles/Body.css';
import Header from './Header';
import { useStateValue } from "../StateProvider";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {

  const [{ discover_weekly }, dispatch] = useStateValue();

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className='body'>
      <Header spotify={spotify}></Header>

      <div className='body__info'>

        <img src={discover_weekly?.images[0].url} alt="" />
        <div className='body__infoText'>

          <strong>PLAYLIST</strong>

          <h2>Discover Weekly</h2>

          <p>{discover_weekly?.description}</p>

        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>

    </div>
  )
}

export default Body
