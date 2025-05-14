import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import PageRoutes from './Routes/Routes';
import AppContext from './Context/AppContext';
import './App.css';

function App() {

  const [spaceData, setSpaceData] = useState([]);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppContext.Provider value={{ spaceData, setSpaceData }}>
      <div className="App workspace-site">
        <Router>
          <nav className={`nav-sec ${isFixed ? 'position-fixed' : ''}`}>
            <NavBar />
          </nav>
          <Routes>
            {PageRoutes.map((data) => (
              <Route
                key={data.id}
                path={data.path}
                name={data.name}
                element={<data.element />}
              />
            ))}
          </Routes>
          <footer className='footer-main'>
            <Footer />
          </footer>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
