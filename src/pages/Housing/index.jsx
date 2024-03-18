import { useParams } from 'react-router-dom'
import rental_list from '../../datas/rental_ad_list.json'
import Slideshow from '../../components/Slideshow/Slideshow'
import Tags from '../../components/Tags/Tags'
import Rating from '../../components/Rating/Rating'
import Dropdown from '../../components/Dropdown/Dropdown'

export default function Housing() {
  const { rentalId } = useParams()
  const rentalInfo = rental_list.find((rental) => rental.id === rentalId)

  return (
    <div className="main_container housing">
      <Slideshow rentalInfo={rentalInfo} />
      <div>
        <div className="housing__titleLocationTags">
          <h1>{rentalInfo.title}</h1>
          <p>{rentalInfo.location}</p>
          <Tags rentalInfo={rentalInfo} />
        </div>
        <div className="housing__ratingHost">
          <Rating rentalInfo={rentalInfo} />
          <div className="housing__ratingHost__Host">
            <p>{rentalInfo.host.name}</p>
            <img
              src={rentalInfo.host.picture}
              alt={`Profil de ${rentalInfo.host.name}`}
            />
          </div>
        </div>
      </div>
      <div className="description_equipement">
        <div>
          <Dropdown title="Description" content={rentalInfo.description} />
        </div>
        <div>
          <Dropdown
            title="Équipments"
            content={rentalInfo.equipments.map((elem, index) => (
              <li key={index}>{elem}</li>
            ))}
          />
        </div>
      </div>
    </div>
  )
}
