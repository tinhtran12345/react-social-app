import React from 'react'
import './Rightbar.css'

export const Rightbar = () => {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText"><b>Pola Poster</b> and <b>3 other friends </b> have a birthday today </span>
                </div>
            </div>
            <img src="/assets/ad.png" alt="" className="rightbarAd" />
            <h4 className='rightbarTitle'>Online Friends</h4>
            <ul className="rightbarFriendList">
                <li className="rightBarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src="/assets/person/3.jpeg" alt="" className="rightProfileImg" />
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUserName">John Carter</span>
                </li>
            </ul>
            
        </div>
    )
}
