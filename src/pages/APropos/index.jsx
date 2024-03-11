import img from '../../assets/paysage-montagneux.avif'
import company_values from '../../datas/company_values'
import Banner from '../../components/banner/Banner'
import CompanyValue from '../../components/companyValue/CompanyValue';

function APropos() {
  return ( 
  <div className='main_container'>
    <Banner>
      <img src={img} alt='bannière d un paysage de montagnes'/>
    </Banner>
    <ul className='a_propos'>
      {company_values.map(({title, content}, index) => (
        <CompanyValue key={`${title}${index}`}
          title={title}
          content={content}
          index={index}
        />
      ))}
    </ul>
  </div>
  );
}
  
  export default APropos;