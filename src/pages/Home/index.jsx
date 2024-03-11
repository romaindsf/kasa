import img from '../../assets/falaise côtière.avif'
import Banner from '../../components/banner/Banner'
import RentalList from '../../components/rental_list/RentalList'

function Home() {
  return ( 
  <div className='main_container'>
    <Banner>
      <img src={img} alt='bannière d une falaise maritime'/>
      <p>Chez vous,<span className='a_la_ligne'/> partout et ailleurs</p>
    </Banner>
    <RentalList />
  </div>
  );
}

export default Home;
