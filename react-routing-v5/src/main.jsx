import React from 'react'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import About from './layouts/About'
import Projects from './layouts/Projects'

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import WebPage from './pages/Web'
import GalleryPage from './pages/Gallery'
import Team from './pages/Team'
import AboutUs from './pages/AboutUs'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/projects">
          <Projects>
            <Route path="/projects/web" component={WebPage}/>
            <Route path="/projects/gallery" component={GalleryPage} />
          </Projects>
        </Route>
        <Route path="/about">
          <About>
            <Route path="/about/team" component={Team} />
            <Route path="/about/about-us" component={AboutUs} />
          </About>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>
)
