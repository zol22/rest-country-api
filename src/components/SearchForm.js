import {React} from "react";

const SearchForm = ({onSearch}) => {

    let query;  
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query.value); // query.value is a reference of what the user types made it in input
       e.currentTarget.reset(); // reset the input value to empty
    }
        return (
           <form onSubmit={handleSubmit} className="search-form">
             <input 
             type="text" 
             ref={(input) => query = input}
             placeholder="Search for a country"/>
             <button type="submit">Go!</button>
           </form> 
           
        )

}
export default SearchForm;