import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Dropdown({title, content, index}) {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <>
            <div 
                className="dropdown__title" 
                key={index} 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
                {title}
                <FontAwesomeIcon icon={faChevronUp} />
            </div>
            {openIndex === index && (
                <div className='dropdown__content'>
                    <p>{content}</p>
                </div>
            )}
        </>
        
        
    );
}

export default Dropdown;