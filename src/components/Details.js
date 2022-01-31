import React from 'react';
import { Redirect, useHistory, useLocation } from 'react-router'
import { Link } from 'react-router-dom'; 


/*  Displays the li and img elements*/
const Details = () => {

    let history = useHistory()

    let { state } = useLocation();
    console.log()

    /* 
       By having the Borders initial, find the country and fill the link to with it 
    */
    //const country = state.find((country) => country.alpha3Code === id);



    const goHomeBtn = () => history.push('/')
    console.log(state)

    return (
        <div> 
    
            <div className="container mx-auto mb-16">
                <button className="goHomeBtn mt-5 mb-5" onClick={() => goHomeBtn()}>
                    <i></i> Back
                </button>
            </div>
            <div className="container details-container">
                <div className="row">
                    <img className="col-6" src={state.flag} alt={state.name}></img>
                    <div className="col-6">
                        <h2>{state.name}</h2>
                        <div>
                            <p>Native Name: <span>{state.nativeName} </span></p>
                            <p>Population: <span>{state.population} </span></p>
                            <p>Region: <span>{state.region} </span></p>
                            <p>Sub Region: <span>{state.subregion} </span></p>
                            <p>Capital: <span>{state.capital} </span></p>
                            <p>Top Level Domain: <span>{state.topLevelDomain[0]} </span></p>
                            <p>Currencies: <span>{state.currencies.map(cur => cur.name)} </span></p>
                            <p>Languages: <span>{state.languages.map(lang => lang.name+ ", ")} </span></p>
                        </div>
                     
                        {state.borders.length > 0 ? 
                        <div className="pt-5">
                            <p>Border Countries: </p>
                            {state.borders.map((border,i) => 
                                <button className="m-3" key={i}>{border}</button>
                            )}
                        </div> : <p>No border countries</p>
                        }
                    </div>
                </div>      
            </div>
               
        </div>
    )
}

export default Details;