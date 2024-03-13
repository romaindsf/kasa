import bannerSrc from '../../assets/falaise côtière.avif'
import Banner from '../../components/Banner/Banner'
import RentalList from '../../components/rental_list/RentalList'

function Home() {
  return ( 
  <div className='main_container'>
    <Banner
      bannerSrc={bannerSrc}
      text={<p>Chez vous, <span className='a_la_ligne'>partout et ailleurs</span></p>}
    />
    <RentalList />
  </div>
  );
}

export default Home;
