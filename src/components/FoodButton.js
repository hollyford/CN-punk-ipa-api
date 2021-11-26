import { useState } from "react/cjs/react.development"

const FoodButton = (props) => {
    const [showFood, setShowFood] = useState(false)

    const onClick = () => setShowFood(true);

    return (
        <div>
            <button onClick={onClick} >Click here to see what food this pairs well with</button>
            { showFood ? <p>{props.foodPairing}</p> : "" }
        </div>
    )
}

export default FoodButton;