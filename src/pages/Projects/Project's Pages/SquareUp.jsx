import { useRef } from "react";

const SquareUp = () => {
    const squarePreloader = useRef(null);

    return (
        <section>
            <div ref={squarePreloader}></div>

            <img loading="lazy" src="" alt="" />

            <article>
                <h1></h1>

                <p></p>
            </article>

            {/* some gifs or videos */}
        </section>
    )
}

export default SquareUp;