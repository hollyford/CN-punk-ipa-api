
const FoodButton = (props) => {
    
    return (
        <div>
            <button>Click here to see what food this pairs well with</button>
            <div>
                <p>{props.foodPairing}</p>
            </div>
        </div>
    )
}

export default FoodButton;