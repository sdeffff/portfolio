import { useRef } from "react";

const Preloader = () => {
    const preloader = useRef(null),
    preloadTxt = useRef(null),
    cover = useRef(null);

    const handlePreloader = (e) => {
        if(e.key === "Enter") {
            cover.current.style.display = "none";
            
            preloader.current.style.animation = "changeOpacity 0.5s ease 3.5s";

            setTimeout(() => {
                preloader.current.style.display = "none";

                console.clear();
            }, 3620);
        }
    }

    window.addEventListener("load", () => {
        window.addEventListener("keydown", (e) => handlePreloader(e));
    });

    window.removeEventListener('keydown', (e) => handlePreloader(e));

    return (
        <section ref={preloader} id="preloader">
            <h1 ref={preloadTxt}>CH. 01:MP Portfolio</h1>

            <div id="preloader-cover" ref={cover}>
                <h3>PRESS Enter~</h3>
            </div>
        </section>
    )
}

export default Preloader;