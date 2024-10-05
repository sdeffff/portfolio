import { memo } from "react";
import { Link } from "react-router-dom";

const ProjectItem = memo(({ img, path }) => {
    return (
        <li className="int proj overflow-hidden">
            <Link to={path}>
                <img loading="lazy" src={img} className="w-[45rem] rounded-sm opacity-60 duration-[350ms] ease-in-out cursor-pointer hover:opacity-100 hover:scale-[1.03]" />
            </Link>
        </li>
    )
});

export default ProjectItem;