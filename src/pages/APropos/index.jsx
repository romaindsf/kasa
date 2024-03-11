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
    <div className='a_propos'>
      {company_values.map(({title, content}, id) => (
        <CompanyValue key={id}
          title={title}
          content={content}
          id={id}
        />
      ))}
    </div>
  </div>
  );
}
  
  export default APropos;