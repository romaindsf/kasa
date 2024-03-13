import React, { useState } from 'react';

function Slideshow({rentalInfo}) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlideIndex) => (currentSlideIndex === rentalInfo.pictures.length - 1 ? 0 : currentSlideIndex + 1));
    };
    
    const prevSlide = () => {
        setCurrentSlide((currentSlideIndex) => (currentSlideIndex === 0 ? rentalInfo.pictures.length - 1 : currentSlideIndex - 1));
    };
    return (
        <div className="slideshow">
            <button onClick={prevSlide} className='arrow arrow__left' type='button'>---</button>
            <img src={rentalInfo.pictures[currentSlide]} alt={`aperçu ${rentalInfo.title}`} />
            <button onClick={nextSlide} className='arrow arrow__right' type='button'>+++</button>
        </div>
    );
}

export default Slideshow;