import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "./stylesheet.css"
import Home from './pages/Home';
import APropos from './pages/APropos';
import Error from './components/error/Error'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/APropos" element={<APropos />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);