import "../styles/Header.css";
import HeaderOption from "./HeaderOption";
import LinkedinLogo from "../images/linkedin-logo.png";
import { Home, Search, SupervisorAccount } from "@material-ui/icons";

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
      </div>
    </header>
  );
}

export default Header;
