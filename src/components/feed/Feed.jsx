import { Share } from '../share/Share';
import { Post } from '../post/Post';
import './Feed.css'

export const Feed = () => {
    return (
        <div className="Feed">
            <div className="feedWrapper">
                <Share/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}
