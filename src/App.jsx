import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/LayoutComponent/Header/Header.jsx';
import Footer from './components/LayoutComponent/Footer/Footer.jsx';
import Loader from './components/Loader.jsx';

// Code Splitting with lazy imports
const Home = lazy(() => import('./Pages/Home/index.jsx'));
const PropertyDetails = lazy(() => import('./Pages/PropertyDetails/index.jsx'));

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="main-content">
          {/* Wrap dynamic imports with Suspense */}
          <Suspense fallback={
            <div className="container" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Loader message="Loading page..." />
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/property/:id" element={<PropertyDetails />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
