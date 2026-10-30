import reactLogo from '../assets/react.svg'
import '../App.css'
function Header() {
  return (
    <>
     <header className="header">
        
        <nav className="nav-bar">
          <img src={reactLogo} alt="React Logo"  className="react-logo" />
          <ul className="nav-list">
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
          </ul>
        </nav>
      </header>
    </>
  )
}
export default Header