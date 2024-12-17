import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlantDetails from './components/plantaDetails';
import { Link } from 'react-router-dom';
import PlantGrid from './components/plantaGrid';

const Home = () => (
  <div>
    <h1>Página Principal</h1>
    <Link to="/planta">Ir a Planta</Link>
    <Link to="/planta2">Ir a Planta2</Link>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planta" element={<PlantDetails />} />
        <Route path="/planta2" element={<PlantGrid />} />
      </Routes>
    </BrowserRouter>
  );
}
