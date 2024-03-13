import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

function Rating({rentalInfo}) {
    const fiveStars = [1, 2, 3, 4, 5]

    return (
        <div className='rating'>
            {fiveStars.map((starNumber, index) =>
                parseInt(rentalInfo.rating) >= starNumber ? (
                    <FontAwesomeIcon icon={solidStar} style={{color:'#FF6060'}} key={index}/>
                ) : (
                    <FontAwesomeIcon icon={solidStar} style={{color:'#E3E3E3'}} key={index}/>
                )
            )}
        </div>
    )
}

export default Rating