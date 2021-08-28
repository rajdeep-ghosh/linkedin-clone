import "../styles/Sidebar.css";
import { Avatar } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Rajdeep Ghosh</h2>
        <h4>rajdeepghosh@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2736</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2936</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
