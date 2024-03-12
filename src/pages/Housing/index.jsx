import { useParams } from 'react-router-dom'
import RentalList from '../../components/rental_list/RentalList'
import Slideshow from '../../components/slideshow/Slideshow'

function Housing() {
    const {rentalId} = useParams()

    return (
        <div className='main_container'>
            <Slideshow />
        </div>
    )
}

export default Housing
