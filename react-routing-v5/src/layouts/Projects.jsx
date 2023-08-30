import React from 'react';
import { Link } from 'react-router-dom';

import classes from './projects.module.css';

const ProjectsLayout = ({ children }) => {
  return (
    <>
      <h1 className={classes.heading}>Projects Layout</h1>
      <ul>
        <li><Link to="/projects/web">Web Development</Link></li>
        <li><Link to="/projects/gallery">Photography</Link></li>
      </ul>
      {children}
    </>
  );
}

export default ProjectsLayout;