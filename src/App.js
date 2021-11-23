import { useEffect, useState } from "react/cjs/react.development";
import Home from "./components/Home"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


const App = () => {
    const [beer, SetBeer] = useState("")
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(
        {
            err: false,
            message: ""
        }
    )
    const handler = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://api.punkapi.com/v2/beers/random");
            if (response.status !== 200) {
                throw new Error("Hmmmm. Something went wrong. Please try again later.")
            }
            const data = await response.json();
            console.log(data)
            SetBeer(data[0])
            setLoading(false)
        } catch (e) {
            setErr({ err: true, message: e.message })
        }
    }
    useEffect(() => {
        handler()
    }, []);

    if (err.err) {
        return <h1>{err.message}</h1>
    }
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/">
                        <Home beerName={beer.name} tagline={beer.tagline} firstBrewed={beer.first_brewed} description={beer.description} imgURL={beer.image_url} loading={loading} handler={handler} foodPairing={beer.food_pairing}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};



export default App;

