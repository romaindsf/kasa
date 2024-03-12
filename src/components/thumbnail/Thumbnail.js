import { Link } from 'react-router-dom';

function Thumbnail ({id, cover, title}) {
    return (
        <Link to={`/housing/${id}`} className="thumbnail">
            <img src={cover} alt={`Couverture de ${title}`}/>
            <figcaption>{title}</figcaption>
        </Link>       
    )
}

export default Thumbnail