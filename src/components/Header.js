import "../styles/Header.css";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { auth } from "../services/firebase";
import HeaderOption from "./HeaderOption";
import LinkedinLogo from "../images/linkedin-logo.png";
import { BusinessCenter, Chat, Home, Notifications, Search, SupervisorAccount } from "@material-ui/icons";
// import avatardemo from "../images/avatar-demo.png";

function Header() {
  const dispatch = useDispatch();

  function logoutOfApp() {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <header className="header">
      <div className="header__left">
        <img src={LinkedinLogo} loading="lazy" alt="LinkedIn Logo" />
        <div className="header__search">
          <Search />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={Home} />
        <HeaderOption title="My Network" Icon={SupervisorAccount} />
        <HeaderOption title="Messaging" Icon={Chat} />
        <HeaderOption title="Notifications" Icon={Notifications} />
        <HeaderOption title="Jobs" Icon={BusinessCenter} />
        <HeaderOption title="Me" avatar={true} />
        <div className="header__divider"></div>
        <button onClick={logoutOfApp} className="header__logoutBtn">Log out</button>
      </div>
    </header>
  );
}

export default Header;
