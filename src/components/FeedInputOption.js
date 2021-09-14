import "../styles/FeedInputOption.css";

function FeedInputOption({ title, Icon, iconColor }) {
  return (
    <div className="feed__inputOption">
      <Icon style={{ color: iconColor }} />
      <h4>{title}</h4>
    </div>
  );
}

export default FeedInputOption;
