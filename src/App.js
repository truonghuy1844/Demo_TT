import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: '10px' }}>Trang chủ</Link>
          <Link to="/about">Giới thiệu</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
