import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import "./stylesheet.css"
import Home from './pages/Home'
import APropos from './pages/APropos'
import Housing from './pages/Housing'
import Error from './components/Error/Error'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<APropos />}/>
        <Route path="/housing/:rentalId" element={<Housing />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);