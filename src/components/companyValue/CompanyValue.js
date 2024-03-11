import { useState } from 'react'

function CompanyValue({title, content, id}) {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <li 
            className="company_value" 
            key={id} 
            onClick={() => setOpenIndex(openIndex === id ? null : id)}
        >
            {title}
            {openIndex === id && <div>{content}</div>}
        </li>
    );
}

export default CompanyValue;