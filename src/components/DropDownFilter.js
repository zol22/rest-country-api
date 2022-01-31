import {React} from "react";
 
const DropDownFilter =( { onGetFetchByRegion, OnInitialFetch}) => {

    let selectedRegion;

    const OnHandleSelect = () => {
        let region = selectedRegion.value
        if (region === 'Search By Region'){
            OnInitialFetch();
        }
        else {
             onGetFetchByRegion(region);
        }
       
    }
    return(
       <div>
           <select onChange={OnHandleSelect} ref={(input) => selectedRegion = input}>
                <option value="Search By Region">Search By Region</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Americas">Americas</option>
                <option value="Oceania">Oceania</option>
           </select>
           
       </div>
    )

}

export default DropDownFilter;