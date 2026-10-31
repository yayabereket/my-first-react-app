
import "./App.css";
import Header from "./components/Header.jsx"
import Main from "./components/Maincontent.jsx";
import Footer from "./components/Footer.jsx";




function Page() {
  return (
    <div className="app-conatiner">
    <Header />
    <Main />
  
    <Footer />
    </div>
  );
}
function App() {
  return (
    <>
     <Page />
    </>
  );
}
export default App;
