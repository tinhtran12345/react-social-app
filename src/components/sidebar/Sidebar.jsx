import "./Sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WorkIcon from '@mui/icons-material/Work';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
export const Sidebar = ()=>{
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeedIcon className = "sidebarIcon"/>
                        <span className="sidebarItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        < ChatIcon className = "sidebarIcon"/>
                        <span className="sidebarItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleIcon className = "sidebarIcon"/>
                        <span className="sidebarItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupsIcon className = "sidebarIcon"/>
                        <span className="sidebarItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarksIcon className = "sidebarIcon"/>
                        <span className="sidebarItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <QuestionMarkIcon className = "sidebarIcon"/>
                        <span className="sidebarItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkIcon className = "sidebarIcon"/>
                        <span className="sidebarItemText">Work</span>
                    </li>
                    <li className="sidebarListItem">
                        <EventAvailableIcon className = "sidebarIcon"/>
                        <span className="sidebarItemText">Events</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className= "sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className= "sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className= "sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className= "sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className= "sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className= "sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className= "sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className= "sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className= "sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className= "sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}