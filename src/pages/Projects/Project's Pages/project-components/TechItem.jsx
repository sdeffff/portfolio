const TechItem = ( {techName, techImg }) => {
    return (
        <li className="flex items-center gap-2">
            <p className="text-lg">{techName}</p>

            <img src={techImg} loading="lazy" alt="" className="w-6" />    
        </li>
    )
}

export default TechItem;