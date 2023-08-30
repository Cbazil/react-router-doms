import { NavLink, Outlet } from 'react-router-dom'

import classes from './about.module.css'
const AboutLayout = () => {
  return (
    <>
      <h1 className={classes.heading}>About Layout</h1>
      <ul>
        <li><NavLink to="/about/team">About Team</NavLink></li>
        <li><NavLink to="/about/about-us">About Company</NavLink></li>
      </ul>
      <Outlet />
    </>
  )
}

export default AboutLayout