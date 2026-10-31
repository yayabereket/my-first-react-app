import "../App.css"
import milanCathedral from '../assets/travel.png'
function Main() {
  return (
    <>
      <main className="main-content">
        <section className="travel-card">
          <img src= {milanCathedral} alt="milan" className="card-image" />
          <div className="milan-card">
            <div className="location-row">
              <span className="location-country">Italy</span>
              <a href="#" target="_blank" rel="noreferrer" className="maps-link">View on Google maps</a>

            </div>       
            <h2 className="card-title">Milan Cathedral</h2>
            <p className="card-date">12 Jan, 2021 - 24 Jan, 2021</p>
            <p className="card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aliquam nemo aliquid incidunt eligendi beatae est quae, 
            quod dignissimos ab eveniet quisquam eum, ad quasi. 
            Ut porro minus dolore sunt atque.
            </p>
          </div>
        </section>
        

      </main>
    </>
  )
}
export default Main