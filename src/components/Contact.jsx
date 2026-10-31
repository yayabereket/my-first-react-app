import "../App.css"

function Contact(props) {
    return (
    
    <section className="travel-card">
         <img src= {props.img.src} alt={props.img.alt} className="card-image" />
        <div className="milan-card">
               
                <h2 className="card-title">{props.name}</h2>
                <p className="card-date">{props.email} </p>
                <p className="card-description">{props.phone}</p>
                
        </div>
    </section>
    
    )
}
export default Contact
    