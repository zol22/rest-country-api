import React ,{useState, useEffect} from "react";
import axios from 'axios';
import SearchForm from './SearchForm';
import DropDownFilter from "./DropDownFilter";

import CountriesContainer from './CountriesContainer';
import NotFound from "./NotFound";


const Home = () => {
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState(false)


    /* Fetch data in the Search Form */
    const performSearch = (name) => {
        axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res =>{
            setData(res.data);
            setError(false)
            })
        .catch(error => {
            setError(true);
            console.log('Error fetching in parsing data', error)
    })
  }

    /* Filter By region  */
    const getFetchByRegion = (region) =>{
        axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
        /*.then(res => console.log(res))*/
        .then(res => {
            setData(res.data)
            setError(false)
        })
        .catch(error => {
            setError(true);
            console.log('Error fetching in parsing data', error)
            
        })

    }

    /* Fetch Initial Countries */
   const initialFetch = () => {
        setLoading(true);
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(res => {
            setData(res.data);
            setLoading(false);
            setError(false);
            })
        .catch( error => {
            setError(true);
            console.log('Error fetching in parsing data', error)
        })
    }

    /* This is called automatically as soon as DOM loads*/
    useEffect(() => {
        initialFetch();
    }, []);

    return (
        <div className="App">
            <h1>Where in the World?</h1>
            
            <SearchForm onSearch={performSearch}/>
            <DropDownFilter  onGetFetchByRegion={getFetchByRegion} OnInitialFetch={initialFetch}/>
    
            {
                error ? <NotFound/> :
                loading ? <div>loading...</div> :
                <CountriesContainer data={data}/>
            }

        </div>
    )
    
}

export default Home;