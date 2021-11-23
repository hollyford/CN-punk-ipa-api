import pint from "../images/pint.jpg"
import FoodButton from "./FoodButton";

const BeerInfo = (props) => {
    return (
        <div>
            <p>Your random beer is: {props.beerName}</p>
            {props.imgURL ? <img src={props.imgURL} alt={`Picture of ${props.beerName}`} /> : <img src={pint} alt={`Picture of a pint of brewdog`}/>} 
            <p>{props.tagline}</p>
            <p>Description: First brewed in {props.firstBrewed}, {props.description}</p>
            <FoodButton foodPairing={props.foodPairing}/>
        </div>
    )
}

export default BeerInfo;




