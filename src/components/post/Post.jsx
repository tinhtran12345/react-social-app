import './Post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const Post = () => {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                        <span className="postUserName">Tinh Majk</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey's Its my first post:</span>
                    <img src="/assets/post/1_1.jpeg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">

                        <img src="/assets/like.png" alt="" className="likeIcon" />
                        <img src="/assets/heart.png" alt="" className="likeIcon" />
                        <span className="postLikeCounter">32 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <div className="span postCommentText">9 comments</div>
                    </div>

                </div>
            </div>
        </div>
    )
}
