import Reac, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Player from './components/Player';
import { getTokenFromResponse } from "./spotify";
import { useStateValue } from "./StateProvider";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useStateValue();


  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;
    console.log("I HAVE A TOKEN ", _token);
    console.log("I HAVE A TOKEN ", hash);
    console.log("sddsdsdsaddsasa");

    if (_token) {
      setToken(_token);


      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("dgfdgdfgdfgfd", user);
        console.log("token token", _token);

        dispatch({
          type: 'SET_USER',
          user: user,
        });

      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, []);
  spotify.getPlaylist("37i9dQZEVXcCKIZQnACEQZ").then((response) =>
    dispatch({
      type: "SET_DISCOVER_WEEKLY",
      discover_weekly: response,
    })
  );


  return (
    <div className="app">
      {
        token ? (<Player spotify={spotify}>Hello</Player>) : (<Login />)
      }

    </div>
  );
}

export default App;
