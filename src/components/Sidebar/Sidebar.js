import "./sidebar.css";
import { RssFeed, Chat } from "@mui/icons-material";
import { Button } from "@mui/material";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span>Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span>Chats</span>
          </li>
        </ul>
        <Button className="sidebarButton">Show More</Button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/2.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">Sruthy</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/3.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">Anithra</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/4.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">Haritha</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/5.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">Devika</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/6.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">Lekshmi</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/7.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">Harsha</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/2.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">Sruthy</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/3.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">Anithra</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/4.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">Haritha</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/5.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">Devika</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/6.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">Lekshmi</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/7.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">Harsha</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
