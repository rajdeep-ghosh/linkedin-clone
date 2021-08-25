import "../styles/Header.css";
import LinkedinLogo from "../images/linkedin-logo.png";
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <img src={LinkedinLogo} loading="lazy" alt="LinkedIn Logo" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </header>
  );
}

export default Header;
