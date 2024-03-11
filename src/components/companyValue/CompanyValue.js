import { useState } from 'react'

function CompanyValue({title, content, index}) {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div 
            className="company_value" 
            key={`${title}${index}`} 
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
            {title}
            {openIndex === index && (
                <div>
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
}

export default CompanyValue;