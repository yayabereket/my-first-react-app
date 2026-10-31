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
        img={{ 
          src: reactLogo,
          alt: "React"

        }}
        name="React"
        phone="0913344149"
        email="example@gmail.com"
      />
      <Contact
        img={{
          src:vite,
          alt:"Vite"

        }}
        name="Vite"
        phone="0913356255"
        email="aaa@example.com"
      />
      <Contact
        img={{
          src:hero,
          alt:"from vite"
        }}
        name="some image"
        phone="0910008040"
        email="email@email.com"
      />
      <Contact
        img={{
          src:profile,
          alt:"landscape"
        }}
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
{
  const nums = [1,2,3,4,5,6,8,]
  const squaredNums = nums.map(nums => nums*nums)
  console.log(squaredNums)
  const names = ["abebe","max","carl"]
  const namesCapital1st = names.map(name =>  name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  )
  console.log(namesCapital1st)
  const strawHats = ["Luffy","Zoro","Sanji","Nami","Robin"]
  const strawHatsWithP = strawHats.map(strawHat => `<p>${strawHat}</p>`
  )
  console.log(strawHatsWithP)
}
export default App;
