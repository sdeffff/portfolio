import { memo } from "react";
import Project from "./project-components/Project";

import "../projects.css"

const Chat = memo(() => {
    return (
        <Project 
        project = "SupaChat"
        />
    )
});

export default Chat;