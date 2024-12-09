import { memo } from "react";
import Project from "./project-components/Project";

//review part:
import video from "/videos/chat-review.mp4";
import chatImg1 from "/imgs/chat-previews/chat-preview-img-1.png";
import chatImg2 from "/imgs/chat-previews/chat-preview-img-2.png";
import chatImg3 from "/imgs/chat-previews/chat-preview-img-3.png";

//icons:
import angular from "/icons/angular.svg";
import firebase from "/icons/firebase.svg";
import sass from "/icons/sass.svg";
import typescript from "/icons/typescript.png";

import "../projects.css"

const Chat = memo(() => {
    return (
        <Project 
        project = "SupaChat"
        features={false}
        video={video}
        desc={`SupaChat - is a realtime chat app built with Angular and Firebase, 
            in this project I tried to use everything that I didn't know well and practice it, f.e.
            CSS grids, Angular and most of its features like services, RxJS to handle
            asynchronus request from and to FireBase DB, where I was storing all of the users,
            their chatrooms and messages. It is also my first project where I was using DataBase
            and I think I made a good job, so enjoy it :)`}
        previewImg1={chatImg1}
        previewImg2={chatImg2}
        previewImg3={chatImg3}
        tech1Name={"Angular - Core for this app"}
        tech1Img={angular}
        tech2Name={"Firebase - for storing data"}
        tech2Img={firebase}
        tech3Name={"Typescript in Angular"}
        tech3Img={typescript}
        tech4Name={"SASS(SCSS) - comfortable styling"}
        tech4Img={sass}
        gitUrl={"https://github.com/sdeffff/SupaChat"}
        webUrl={"https://supa-chat-ebon.vercel.app/"}
        />
    )
});

export default Chat;