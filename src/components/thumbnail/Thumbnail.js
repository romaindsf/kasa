import { Link } from 'react-router-dom'

export default function Thumbnail({ id, cover, title }) {
  return (
    <Link to={`/logement/${id}`} className="thumbnail">
      <img src={cover} alt={`Couverture de ${title}`} />
      <figcaption>{title}</figcaption>
    </Link>
  )
}
