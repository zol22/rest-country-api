import {React} from "react";
import NotFound from "./NotFound";
import Country from './Country';
import { Link } from 'react-router-dom'; // usehistory is Hook

const CountriesContainer = ({data}) => {
   
    /*let history = useHistory();

    const clickMoreInfo = (name) => {
        let path = `countries/${name}`;
        history.push(path);
        console.log(path)
       for (let key in data){
           var value = data[key];
           console.log(value)
       }
    }*/

    /* Link to: object 
        @parameters :
            pathname: A string representing the path to link to.
            search: A string representation of query parameters.
            hash: A hash to put in the URL, e.g. #a-hash.
            state: State to persist to the location.
    */
    let country;
    if (data.length >= 1){
        country = data.map( (res,i) => (
            <Link to={{ pathname: `/countries/${res.alpha3Code}`, state: res}} key={res.alpha3Code} >
                    <Country 
                    flag={res.flag} 
                    name={res.name}
                    population={res.population}
                    region={res.region}
                    capital={res.capital} 
                    />
            </Link>
            ));
    }
    else {
        <NotFound />
    }

    return(

        <div id="country-container">
            {country}

        </div>
        )   
}
export default CountriesContainer;