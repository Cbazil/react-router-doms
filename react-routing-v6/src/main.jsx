import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import App from './App.jsx'
import './index.css'

import Projects from './layouts/Projects.jsx'
import About from './layouts/About.jsx'

import WebPage from './pages/Web'
import GalleryPage from './pages/Gallery'
import Team from './pages/Team'
import AboutUs from './pages/AboutUs'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />}>
          <Route path="web" element={<WebPage />} />
          <Route path="gallery" element={<GalleryPage />} />
        </Route>
        <Route path="/about" element={<About />}>
          <Route path="team" element={<Team />} />
          <Route path="about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
