import { Link } from "react-router-dom";

const ProjectItem = ({ img, path }) => {
    //Cover img into <Link>
    return (
        <li className="int proj overflow-hidden">
            <Link to={path}><img loading="lazy" src={img} alt="" className="w-[45rem] rounded-sm opacity-60 duration-[350ms] ease-in-out cursor-pointer hover:opacity-100 hover:scale-[1.03]" /></Link>
        </li>
    )
}

export default ProjectItem;