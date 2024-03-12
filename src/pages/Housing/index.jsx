import { useParams } from 'react-router-dom'
import rental_list from '../../datas/rental_ad_list.json'
import Slideshow from '../../components/slideshow/Slideshow'
import Tags from '../../components/tags/Tags'

function Housing() {
    const {rentalId} = useParams()
    const currentIndex = rental_list.findIndex(rental => rental.id === rentalId);

    return (
        <div className='main_container rental_info'>
            <Slideshow 
                rental_list={rental_list} 
                currentIndex={currentIndex}
            />
            <h1>{rental_list[currentIndex].title}</h1>
            <p>{rental_list[currentIndex].location}</p>
            <Tags 
                rental_list={rental_list}
                currentIndex={currentIndex}
            />
            <div className='rating_host'>
                <p>{rental_list[currentIndex].host.name}</p>
                <img src={rental_list[currentIndex].host.picture} 
                    alt={`Profil de ${rental_list[currentIndex].host.name}`}
                />
            </div>
            <div className='description_equipments'>
                {/* component Description et Equipment  */}
            </div>
        </div>
    )
}

export default Housing