import "./Kep.css"

function Kep(props) {
    return(
        <div className="kep">
            <h2>{props.kep.nev}</h2>
            <img src={props.kep.eleresiUt} alt={props.kep.nev}/>
        </div>
    )
}

export default Kep