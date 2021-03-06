import "../styles/Feed.css";
import { useEffect, useState } from "react";
import firebase from "firebase";
import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@material-ui/icons";
import FeedInputOption from "./FeedInputOption";
import Post from "./Post";
import { db } from "../services/firebase";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser)
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  function sendPost(e) {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      desc: user.email,
      caption: input,
      dpURL: user.dpURL || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input onChange={(e) => {setInput(e.target.value)}} value={input} type="text"></input>
            <button onClick={sendPost} type="submit">Post</button>
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
      <FlipMove>
        {posts.map((post) => {
          return (
            <Post 
              key={post.id} 
              name={post.data.name} 
              desc={post.data.desc} 
              caption={post.data.caption} 
              dpURL={post.data.dpURL} 
            />
          );
        })}
      </FlipMove>

    </div>
  );
}

export default Feed;
