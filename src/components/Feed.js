import "../styles/Feed.css";
import { 
  CalendarViewDay, 
  Create, 
  EventNote, 
  Image, 
  Subscriptions 
} from "@material-ui/icons";
import FeedInputOption from "./FeedInputOption";
import Post from "./Post";

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
        <div className="feed__inputOptions">
          <FeedInputOption title="Photo" Icon={Image} iconColor="#70b5f9" />
          <FeedInputOption title="Video" Icon={Subscriptions} iconColor="#e7a33e" />
          <FeedInputOption title="Event" Icon={EventNote} iconColor="#fe2575" />
          <FeedInputOption title="Write Article" Icon={CalendarViewDay} iconColor="#7fc15e" />
        </div>
      </div>

      {/* Posts */}
      <Post name="Rajdeep Ghosh" desc="Description" caption="Post caption" />
      <Post name="Rajdeep Ghosh" desc="Description" caption="Post caption 2" />
      
    </div>
  );
}

export default Feed;
