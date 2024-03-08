function Thumbnail ({id, cover, title}) {
    return (
        <li key={id} className="thumbnail">
            <img src={cover} alt={`photo ${title}`}/>
            <h2>{title}</h2>
        </li>
    )
}

export default Thumbnail