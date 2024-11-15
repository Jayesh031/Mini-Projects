// import video from "../assets/bg_nature.mp4";
// import video1 from "../assets/bg_video.mp4";
// import video2 from "../assets/video1.mp4";
// import images from "../assets/destinations-3.jpg";
import videox from "../assets/vd.mp4";
import "./Bg.css"
import React from "react";

export default function Bg(){
    return(
        <video className="background" src={videox} autoPlay loop muted>
        </video>
    )
}