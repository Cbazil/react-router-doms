import { NavLink } from 'react-router-dom'
function App() {
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        <li><NavLink to="/projects">Projects Layout</NavLink></li>
        <li><NavLink to="/about">About Layout</NavLink></li>
      </ul>
    </>
  )
}

export default App
