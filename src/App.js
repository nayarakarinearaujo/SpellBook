import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SpellDetailPage from './pages/StellDetailPage';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spell/:id" element={<SpellDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
