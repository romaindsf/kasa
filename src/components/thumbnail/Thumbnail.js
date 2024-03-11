function Thumbnail ({id, cover, title}) {
    return (
        <li className="thumbnail">
            <img src={cover} alt={`Couverture de ${title}`}/>
            <figcaption>{title}</figcaption>
        </li>
    )
}

export default Thumbnail