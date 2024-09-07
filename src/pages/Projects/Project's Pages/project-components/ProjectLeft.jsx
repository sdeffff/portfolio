import { useEffect, useRef } from "react";

const ProjectLeft = ( props ) => {
    const reviewRef = useRef(null);

    useEffect(() => {
        const playVideo = setTimeout(() => {
            reviewRef.current.autoplay = true;
            reviewRef.current.play();
        }, 1800)

        return () => clearTimeout(playVideo);
    }, []);
    
    return (
        <aside className="w-[260rem] flex flex-col items-center gap-2 mt-5 overflow-y-scroll h-[100vh]">
            <video src={props.video} ref={reviewRef} loop muted>
                <source type="video/mp4"/>
            </video>

            <img src={props.img1} className="pointer-events-none" />
            <img src={props.img1} className="pointer-events-none" />
            <img src={props.img1} className="pointer-events-none" />
            <img src={props.img2}  className="pointer-events-none" />
        </aside>
    )
}

export default ProjectLeft;