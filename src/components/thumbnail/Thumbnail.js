function Thumbnail ({id, cover, title}) {
    return (
        <li className="thumbnail">
            <img src={cover} alt={`photo ${title}`}/>
            <figure>{title}</figure>
        </li>
    )
}

export default Thumbnail