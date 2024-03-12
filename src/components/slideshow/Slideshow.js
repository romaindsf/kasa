import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import rental_list from "../../datas/rental_ad_list.json"

function Slideshow() {
    const { rentalId } = useParams();
    const [currentSlide, setCurrentSlide] = useState(0);

    const currentIndex = rental_list.findIndex(rental => rental.id === rentalId);

    const nextSlide = () => {
        setCurrentSlide((currentSlideIndex) => (currentSlideIndex === rental_list[currentIndex].pictures.length - 1 ? 0 : currentSlideIndex + 1));
      };
    
      const prevSlide = () => {
        setCurrentSlide((currentSlideIndex) => (currentSlideIndex === 0 ? rental_list[currentIndex].pictures.length - 1 : currentSlideIndex - 1));
      };

    return (
        <div className="slideshow">
            <button onClick={prevSlide} className='arrow arrow__left' type='button'>---</button>
            <img src={rental_list[currentIndex].pictures[currentSlide]} alt="miam" />
            <button onClick={nextSlide} className='arrow arrow__right' type='button'>+++</button>
        </div>
    );
}

export default Slideshow;