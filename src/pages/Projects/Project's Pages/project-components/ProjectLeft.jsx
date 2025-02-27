import { useState, useEffect, useRef, memo } from "react";

const ProjectLeft = memo(( props ) => {
    const reviewRef = useRef(null), 
          videoRef = useRef(null),
          [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        //TO play the video after preloader I have in portfolio
        const playVideo = setTimeout(() => {
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
                <video src={props.video} ref={reviewRef} type="video/mp4" autoplay loop muted playsinline className="rounded-sm"></video>

                <img loading="lazy" src={props.previewImg1} className="rounded-sm" />
                <img loading="lazy" src={props.previewImg2} className="rounded-sm" />
                <img loading="lazy" src={props.previewImg3} className="rounded-sm" />
            </div>

            {props.features ? ( 
                <article className="project-features flex flex-col">
                    <h2 className="project-features-head text-xl">Project Features</h2>
    
                    <ul className="features-reviews flex flex-col xl:flex-row gap-4">
                        <li className="int" name={props.feature1Name}>
                            <img loading="lazy" src={props.feature1Img} className="rounded-sm" />
                        </li>
                        <li className="int" name={props.feature2Name}>
                            {props.feature2IsVideo ? 
                                <video ref={videoRef} muted onMouseOver={handleVideo} onMouseOut={() => setIsHovered(false)} playsinline>
                                    <source src={props.feature2Img} type="video/mp4" className="rounded-sm" />
                                </video> :

                                <img loading="lazy" src={props.feature2Img} className="rounded-sm" />
                            }
                        </li>
                        <li className="int" name={props.feature3Name}>
                            <img loading="lazy" src={props.feature3Img} className="rounded-sm" />
                        </li>
                    </ul>
                </article>
                )
            : ''
            }
        </aside>
    )
});

export default ProjectLeft;