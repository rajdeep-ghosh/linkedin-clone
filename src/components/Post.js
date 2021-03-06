import "../styles/Post.css";
import { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import FeedInputOption from "./FeedInputOption";

const Post = forwardRef(({ name, desc, caption, dpURL }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={dpURL}>{name[0]}</Avatar>
        <div className="post__details">
          <h2>{name}</h2>
          <p>{desc}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{caption}</p>
      </div>
      <div className="post__buttons">
        <FeedInputOption title="Like" Icon={ThumbUpAltOutlined} iconColor="gray" />
        <FeedInputOption title="Comment" Icon={ChatOutlined} iconColor="gray" />
        <FeedInputOption title="Share" Icon={ShareOutlined} iconColor="gray" />
        <FeedInputOption title="Send" Icon={SendOutlined} iconColor="gray" />
      </div>
    </div>
  );
})

export default Post;
