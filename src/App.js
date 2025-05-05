import './App.css';
import React from 'react';
import NavBar from './NavBar';
import { Route, Routes, Navigate } from 'react-router-dom';
import WorksPage from './WorksPage';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import { useState, useEffect } from 'react';

export const WindowContext = React.createContext(null);
export const RESIZE_THRESHOLD = 768;

export default function App() {

  const [browserWindow, setBrowserWindow] = useState(
    {
      height: window.innerHeight,
      width: window.innerWidth,
      isMobileDetected: 'ontouchstart' in window || navigator.msMaxTouchPoints,
      isWidthBelowThreshold: isWidthBelowThreshold(window.innerWidth)
    }
  );

  function isWidthBelowThreshold(width) { return width <= RESIZE_THRESHOLD };

  function handleWindowSizeChange() {
    setBrowserWindow({ window: window.innerWidth, height: window.innerHeight, isMobile: browserWindow.isMobile, isWidthBelowThreshold: isWidthBelowThreshold(window.innerWidth) });
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return (
    <div> 
      <WindowContext.Provider value={{ browserWindow: browserWindow }}>
        <NavBar />
        <Routes>
          <Route exact path="/" Component={AboutPage} />
          <Route exact path="/about" Component={AboutPage} />
          <Route exact path="/works" Component={WorksPage} />
          <Route path='/projects/*' Component={ProjectPage} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </WindowContext.Provider>
    </div>
  );
}