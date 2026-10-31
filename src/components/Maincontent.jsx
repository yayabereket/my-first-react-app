import "../App.css";
function Main({data}) {
  return (
    <>
      <main className="main-content">
        <section className="travel-card">
          <img src={data.img.src} alt={data.img.alt} className="card-image" />
          <div className="milan-card">
            <div className="location-row">
              <span className="location-country">{data.country}</span>
              <a
                href={data.googleMapLink}
                target="_blank"
                rel="noreferrer"
                className="maps-link"
              >
                View on Google maps
              </a>
            </div>
            <h2 className="card-title">{data.title}</h2>
            <p className="card-date">{data.dates}</p>
            <p className="card-description">
             {data.text}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
export default Main;
