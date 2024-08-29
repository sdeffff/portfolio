import { useEffect, useRef } from "react";


const Preloader = () => {
    const preloader = useRef(null);

    useEffect(() => {
        const handlePreloader = () => {
            preloader.current.style.opacity = 0;

            setTimeout(() => {
                preloader.current.style.display = "none";

                // console.clear();
            }, 3620);
        };

        window.addEventListener("load", handlePreloader);

        return () => {
            window.removeEventListener("load", handlePreloader);
        };
    }, []);

    return (
        <section 
        ref={preloader} 
        id="preloader" 
        className= "bg-[#060606] fixed top-0 left-0 w-[100vw] h-[100vh] opacity-100 z-[100] ease-in-out duration-[550ms] delay-[2s]">
            <h1 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl">CH. 01:MP Portfolio</h1>
        </section>
    )
}

export default Preloader;