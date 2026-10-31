import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Maincontent.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import reactLogo from "./assets/react.svg"
import vite from "./assets/vite.svg"
import hero from "./assets/hero.png"
import profile from "./assets/profile.png"

function Page() {
  return (
    <div className="app-conatiner">
      <Header />
      <Main />
      <Contact
        img={reactLogo}
        name="React"
        phone="0913344149"
        email="example@gmail.com"
      />
      <Contact
        img={vite}
        name="Vite"
        phone="0913356255"
        email="aaa@example.com"
      />
      <Contact
        img={hero}
        name="some image"
        phone="0910008040"
        email="email@email.com"
      />
      <Contact
        img={profile}
        name="some screenshot"
        phone="0911504082"
        email="gmail@gmail.com"
      />

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
