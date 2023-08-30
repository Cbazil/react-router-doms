import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import classes from './projects.module.css';

const ProjectsLayout = () => {
  return (
    <>
      <h1 className={classes.heading}>Projects Layout</h1>
      <ul>
        <li><NavLink to="/projects/web">Web Development</NavLink></li>
        <li><NavLink to="/projects/gallery">Photography</NavLink></li>
      </ul>
      <Outlet />
    </>
  );
}

export default ProjectsLayout;