import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails ';
import SellForm from './components/SellForm';
import RentForm from './components/RentForm';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/sell" element={<SellForm />} />
          <Route path="/rent" element={<RentForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;