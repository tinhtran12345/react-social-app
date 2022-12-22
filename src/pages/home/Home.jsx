import React from "react"
import { Topbar } from "../../components/topbar/topbar"
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Feed } from "../../components/feed/Feed";
import { Rightbar } from "../../components/rightbar/Rightbar";
import './home.css';
export const Home = ()=>{
    return (
        <>
            <Topbar/>
            <div className="main homeContainer">
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </div>
        </>
    )
}
