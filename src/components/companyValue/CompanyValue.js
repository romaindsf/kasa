import { useState } from 'react'

function CompanyValue({title, content, id}) {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <>
            <div 
                className="company_value__title" 
                key={id} 
                onClick={() => setOpenIndex(openIndex === id ? null : id)}
            >
                {title}
            </div>
            {openIndex === id && (
                <div className='company_value__content'>
                    <p>{content}</p>
                </div>
            )}
        </>
        
        
    );
}

export default CompanyValue;