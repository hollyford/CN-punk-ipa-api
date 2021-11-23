import styled from "styled-components";
import pint from "../images/pint.jpg"
import FoodButton from "./FoodButton";

const BeerInfo = (props) => {
    return (
        <div>
            <p>Your random beer is: {props.beerName}</p>
            {props.imgURL ? <BeerImg src={props.imgURL} alt={`Picture of ${props.beerName}`} /> : <BeerImg src={pint} alt={`Picture of a pint of brewdog`}/>} 
            <p>{props.tagline}</p>
            <p>Description: First brewed in {props.firstBrewed}, {props.description}</p>
            <FoodButton foodPairing={props.foodPairing}/>
        </div>
    )
}

const BeerImg = styled.img`
width: auto;
max-height: 300px;
`

export default BeerInfo;




