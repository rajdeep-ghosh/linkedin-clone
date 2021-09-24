import "../styles/Widget.css";
import { FiberManualRecord, Info } from "@material-ui/icons";

function Widget() {
  function news(heading, subtitle) {
    return (
      <div className="widget__article">
        <div className="widget__articleLeft">
          <FiberManualRecord />
        </div>
        <div className="widget__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="widget">
      <div className="widget__info">
        <div className="widget__header">
          <h2>LinkedIn News</h2>
          <Info />
        </div>
        {news("Apple is back with its new iPhone 13 lineup", "Top news - 9574 readers")}
        {news("Covid India updates", "Top news - 645 readers")}
        {news("India vaccinates 25 million people in a single day", "Top news - 13470 readers")}
        {news("Tesla hits new high", "Cars & auto - 365 readers")}
        {news("Doge to Moon", "Crypto - 123 readers")}
      </div>
      <div className="widget__copyright">
        <a href="https://github.com/rajdeep-ghosh" target="_blank" rel="noreferrer">Rajdeep Ghosh &copy; 2021</a>
      </div>
    </div>
  );
}

export default Widget;
