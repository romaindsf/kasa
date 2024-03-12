import React, { useState } from 'react';

function Slideshow({rental_list, currentIndex}) {
    const [currentSlide, setCurrentSlide] = useState(0);

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