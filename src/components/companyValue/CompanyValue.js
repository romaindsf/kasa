import { useState } from 'react'

function CompanyValue({title, content, index}) {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <li 
            className="company_value" 
            key={`${title}${index}`} 
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
            {title}
            {openIndex === index && <div>{content}</div>}
        </li>
    );
}

export default CompanyValue;