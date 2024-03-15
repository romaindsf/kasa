import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function Slideshow({ rentalInfo }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((currentSlideIndex) =>
      currentSlideIndex === rentalInfo.pictures.length - 1
        ? 0
        : currentSlideIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentSlide((currentSlideIndex) =>
      currentSlideIndex === 0
        ? rentalInfo.pictures.length - 1
        : currentSlideIndex - 1
    )
  }
  return (
    <div className="slideshow">
      {rentalInfo.pictures.length > 1 && (
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={prevSlide}
          className="arrow arrow__left"
        />
      )}
      <img
        src={rentalInfo.pictures[currentSlide]}
        alt={`aperçu ${rentalInfo.title}`}
      />
      {rentalInfo.pictures.length > 1 && (
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={nextSlide}
          className="arrow arrow__right"
        />
      )}
    </div>
  )
}
