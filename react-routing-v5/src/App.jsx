import { Link } from 'react-router-dom';
function App({children}) {
  return (
    <>
      <h1>Home page</h1>
      <ul>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul> 
      {children}
    </>
  )
}

export default App
