import { useRef, useEffect, memo } from "react";

const Preloader = ( {txt} ) => {
    const preloaderRef = useRef(null);

    useEffect(() => {
        const handlePreloader = () => {
            if(preloaderRef.current) {
                setTimeout(() => {
                    preloaderRef.current.className = preloaderRef.current.className.replace("opacity-100", "opacity-0");

                    setTimeout(() => {
                        preloaderRef.current.className = preloaderRef.current.className.replace("block", "hidden");
                    }, 450);
                }, 1800);
            }
        };

        window.addEventListener("load", handlePreloader());

        return () => {
            window.removeEventListener("load", handlePreloader());
        };
    }, []);

    return (
    <div ref={preloaderRef} 
        className="preloader bg-[#060606] fixed top-0 left-0 w-full h-full z-[90] opacity-100 duration-500 block"
    >
        <h1 className="text-[#dddddd] absolute right-10 top-4 text-2xl pointer-events-none">{txt}</h1>
    </div>
    )
}

export default memo(Preloader);