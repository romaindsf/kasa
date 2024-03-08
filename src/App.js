import Header from './components/header/Header'
import RentalList from './components/rental_list/RentalList'
import Footer from './components/footer/Footer'

function App() {
  return ( 
  <>
    <Header />
    <div className='main_container'>
      <RentalList />
    </div>
    
    <Footer />
  </>
  );
}

export default App;
