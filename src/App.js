import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'; // Import Home correctly
import About from './components/About';
import BookDetails from './components/BookDetails';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Correctly reference Home component */}
        <Route path="/about" element={<About />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
