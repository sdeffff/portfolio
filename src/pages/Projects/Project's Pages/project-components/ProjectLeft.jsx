import { useState, useEffect, useRef } from "react";

const ProjectLeft = ( props ) => {
    const reviewRef = useRef(null),
          videoRef = useRef(null),
          [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const playVideo = setTimeout(() => {
            reviewRef.current.autoplay = true;
            reviewRef.current.play();
        }, 1800)

        return () => clearTimeout(playVideo);
    }, []);

    const handleVideo = () => {
        if(videoRef.current && !isHovered) {
            setIsHovered(true);
            if(videoRef.current.paused) {
                videoRef.current.play();
            }
        }
    }
    
    return (
        <aside className="flex flex-col items-center justify-center lg:justify-normal w-full lg:w-[32rem] xl:w-[53.5rem] gap-4 mt-5 pb-10 lg:h-[100vh] lg:overflow-y-scroll">
            <div className="previews flex flex-col items-center justify-center gap-2">
                <video src={props.video} ref={reviewRef} type="video/mp4" loop muted playsinline></video>

                <img loading="lazy" src={props.img2} />
                <img loading="lazy" src={props.img1} />
                <img loading="lazy" src={props.img3} />
            </div>

            {props.features ? ( 
                <article className="project-features flex flex-col">
                    <h2 className="project-features-head text-xl">Project Features</h2>
    
                    <ul className="features-reviews flex flex-col xl:flex-row gap-4">
                        <li className="int" name="adaptiveness">
                            <img loading="lazy" src={props.adapt} />
                        </li>
                        <li className="int" name="transition">
                            <video ref={videoRef} muted onMouseOver={handleVideo} onMouseOut={() => setIsHovered(false)} playsinline>
                                <source src={props.transition} type="video/mp4" />
                            </video>
                        </li>
                        <li className="int" name="cursor">
                            <img loading="lazy" src={props.cursor} />
                        </li>
                    </ul>
                </article>
                )
            : ''
            }
        </aside>
    )
}

export default ProjectLeft;