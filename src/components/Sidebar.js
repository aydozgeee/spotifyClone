import React from 'react'
import '../styles/Sidebar.css';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from "../StateProvider";
import SidebarOption from './SidebarOption';
function Sidebar() {
  const [{ playlists }, dispatch] = useStateValue();
  
  return (
    <div className='sidebar'>
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home"></SidebarOption>
      <SidebarOption Icon={SearchIcon} title="Search"></SidebarOption>
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library"></SidebarOption>
      <br></br>
      <strong className='sidebar__title'>PLAYLISTS</strong>
    <hr></hr>
    {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
</div>
  )
}

export default Sidebar