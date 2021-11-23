import pint from "../images/pint.jpg"

const BeerInfo = (props) => {
    return (
        <div>
            <p>Your random beer is: {props.beerName}</p>
            {props.imgURL ? <img src={props.ingURL} /> : <img src={pint} />} 
            <p>{props.tagline}</p>
            <p>Description: First brewed in {props.firstBrewed}, {props.description}</p>
        </div>
    )
}

export default BeerInfo;