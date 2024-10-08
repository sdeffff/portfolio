import { useRef, useEffect, memo } from "react";

const Preloader = ( {txt} ) => {
    const preloaderRef = useRef(null);

    useEffect(() => {
        const handlePreloader = () => {
            if(preloaderRef.current) {
                setTimeout(() => {
                    preloaderRef.current.style.opacity = 0;

                    setTimeout(() => {
                        preloaderRef.current.style.display = "none";

                        console.clear();

                        const logStyles = "background-color: #101010; color: #f4f4f4; font-size: 1.25rem; padding: 2px; border-radius: 6px;";
                        console.log("%cDesign and Code by Maksym Pavlii", logStyles);
                    }, 450);
                }, 1350);
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