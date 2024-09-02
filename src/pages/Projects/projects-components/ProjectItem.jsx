const ProjectItem = ({ img }) => {
    //Cover img into <Link>
    return (
        <li className="int proj overflow-hidden">
            <img loading="lazy" src={img} alt="" className="w-[45rem] rounded-sm opacity-60 duration-[350ms] ease-in-out cursor-pointer hover:opacity-100 hover:scale-[1.03]" />
        </li>
    )
}

export default ProjectItem;