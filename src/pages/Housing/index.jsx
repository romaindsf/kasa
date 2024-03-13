import { useParams } from 'react-router-dom'
import rental_list from '../../datas/rental_ad_list.json'
import Slideshow from '../../components/slideshow/Slideshow'
import Tags from '../../components/tags/Tags'

function Housing() {
    const {rentalId} = useParams()
    const rentalInfo = rental_list.find(rental =>rental.id === rentalId)

    return (
        <div className='main_container rental_info'>
            <div>
                <Slideshow rentalInfo={rentalInfo}/>
                <h1>{rentalInfo.title}</h1>
                <p>{rentalInfo.location}</p>
                <Tags rentalInfo={rentalInfo}/>
            </div>
            <div className='ratingHost'>
                {/* rating */}
                <div className='ratingHost__host'>
                    <p>{rentalInfo.host.name}</p>
                    <img src={rentalInfo.host.picture} 
                        alt={`Profil de ${rentalInfo.host.name}`}
                    />
                </div>
            </div>
            <div>
                {/* description et equipment */}
            </div>
        </div>
    )
}

export default Housing