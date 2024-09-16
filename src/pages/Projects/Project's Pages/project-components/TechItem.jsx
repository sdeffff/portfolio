const TechItem = ( {techName, techImg }) => {
    return (
        <li className="flex items-center gap-2">
            <p className="text-[0.9rem] md:text-lg">{techName}</p>

            <img src={techImg} loading="lazy" alt="" className="w-5 md:w-6" />    
        </li>
    )
}

export default TechItem;