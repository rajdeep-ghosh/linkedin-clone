import "../styles/Feed.css";
import { Create } from "@material-ui/icons";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input type="text"></input>
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feed;
