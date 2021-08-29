import "../styles/Header.css";
import HeaderOption from "./HeaderOption";
import LinkedinLogo from "../images/linkedin-logo.png";
import { BusinessCenter, Chat, GridOnRounded, Home, Notifications, Search, SupervisorAccount } from "@material-ui/icons";
import avatardemo from "../images/avatar-demo.png";

function Header() {
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
        <HeaderOption title="Jobs" Icon={BusinessCenter} />
        <HeaderOption title="Notifications" Icon={Notifications} />
        <HeaderOption title="Me" avatar={avatardemo} />
        <div className="header__divider"></div>
        <HeaderOption title="Work" Icon={GridOnRounded} />
      </div>
    </header>
  );
}

export default Header;
