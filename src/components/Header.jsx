import reactLogo from '../assets/react.svg'
import '../App.css'
function Header() {
  return (
    <>
     <header className="header">
        
       
          <img src={reactLogo} alt="React Logo"  className="react-logo" />
          <span className='navbar-text'>My travel journal</span>
        
      </header>
    </>
  )
}
export default Header