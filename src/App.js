import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

//import NotFound from "./components/NotFound";
import {
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';
import Home from "./components/Home";
import Details from "./components/Details";

const App  = () =>  {

    return (
        <div className="App">

            <Switch>
                <Route exact path='/' component={ () => <Redirect to="/Home" />}/>
                <Route exact path="/Home" component={Home} />
                <Route path="/countries/:id" component={Details} />

            </Switch>

        </div>
    )
    
}

export default App;