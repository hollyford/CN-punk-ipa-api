import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import BeerInfo from './BeerInfo'

const Home = (props) => {
    return (
        <div>
            <h1>Random Beer</h1>
            {props.loading ? (
                <p>Your random beer is: LOADING...</p>
            ) : (
                <>
                    <BeerInfo beerName={props.beerName} tagline={props.tagline} firstBrewed={props.first_brewed} description={props.description} imgURL={props.image_url} />
                    <button onClick={props.handler}>
                        <FontAwesomeIcon icon={faSyncAlt} />
                    </button>
                </>
            )}
        </div>
    )
}

export default Home;