import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function Dropdown({ title, content, index }) {
  const [openIndex, setOpenIndex] = useState(null)

  const handleClick = () => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <div className="dropdown__title" key={index} onClick={handleClick}>
        {title}
        <FontAwesomeIcon
          icon={faChevronUp}
          className={
            openIndex === index
              ? 'dropdown__title__active'
              : 'dropdown__title__inactive'
          }
        />
      </div>
      {openIndex === index && (
        <div
          className={`dropdown__content 
                        ${
                          openIndex === index
                            ? 'dropdown__content__active'
                            : 'dropdown__content__inactive'
                        }`}
        >
          <p>{content}</p>
        </div>
      )}
    </>
  )
}
