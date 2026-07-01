import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/LayoutComponent/Header/Header';
import Footer from './components/LayoutComponent/Footer/Footer';
import Loader from './components/UIComponents/Loader/Loader';

// Code Splitting with lazy imports
const Home = lazy(() => import('./Pages/Home/index.jsx'));
const PropertyDetails = lazy(() => import('./Pages/PropertyDetails'));
const Featured = lazy(() => import('./Pages/Featured'));
const About = lazy(() => import("./Pages/About/About.jsx"));
const Contact = lazy(() => import('./Pages/Contact'));
const Login = lazy(() => import('./Pages/Login'));
const SignUp = lazy(() => import('./Pages/SignUp'));
import PrivateRoute from './components/UIComponents/PrivateRoute/PrivateRoute';
const Profile = lazy(() => import("./Pages/Profile/Profile.jsx"));
const EditProfile = lazy(() => import("./Pages/Profile/EditProfile.jsx"));

const App = () => {
  const location = useLocation();

  // Hide Header and Footer on Login (/) and SignUp (/signup) pages
  const hideHeaderFooter = location.pathname === '/' || location.pathname === '/signup';

  return (
    <div className="app-container">
      {!hideHeaderFooter && <Header />}
      <main className="main-content">
        {/* Wrap dynamic imports with Suspense */}
        <Suspense fallback={
          <div className="container" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Loader message="Loading page..." />
          </div>
        }>
          <Routes>
            {/* Initially load Login at root (/) */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            
            <Route element={<PrivateRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/property/:id" element={<PropertyDetails />} />
              <Route path="/featured" element={<Featured />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/edit" element={<EditProfile />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default App;
