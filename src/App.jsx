

import './App.css'
import reactLogo from './assets/react.svg'

function Yaya() {
  console.log("yaya")
  return   <h1>yaya</h1>
  
  
}
function App() {


  return (
    <>
    <img src={reactLogo} alt="" />
    <Yaya />
    </>
  )
}

export default App
