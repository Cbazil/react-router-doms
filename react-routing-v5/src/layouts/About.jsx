import { Link } from 'react-router-dom'

import classes from './about.module.css'
const AboutLayout = ({ children }) => {
  return (
    <>
      <h1 className={classes.heading}>About Layout</h1>
      <ul>
        <li><Link to="/about/team">About Team</Link></li>
        <li><Link to="/about/about-us">About Company</Link></li>
      </ul>
      {children}
    </>
  )
}

export default AboutLayout