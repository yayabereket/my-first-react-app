import "../App.css"
function Joke(props) {
    return (
        <>
          <h2>setup :{props.setup}</h2>
          <p> punchline: {props.punchline}</p>
        </>
    )
}
export default Joke