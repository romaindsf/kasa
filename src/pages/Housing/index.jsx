import { useParams } from 'react-router-dom'
import rental_list from '../../datas/rental_ad_list.json'
import Slideshow from '../../components/slideshow/Slideshow'

function Housing() {
    const {rentalId} = useParams()
    const currentIndex = rental_list.findIndex(rental => rental.id === rentalId);

    return (
        <div className='main_container'>
            <Slideshow 
                rental_list={rental_list} 
                currentIndex={currentIndex}/>
        </div>
    )
}

export default Housing