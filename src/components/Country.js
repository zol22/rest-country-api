import React from 'react';
import { Card} from 'react-bootstrap';

const Country = ({flag,name,population,region,capital}) => {
    
    return(
        <div className="country-item">
        
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={flag}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Population: {population}</Card.Text>
                    <Card.Text>Region: {region}</Card.Text>
                    <Card.Text>Capital: {capital}</Card.Text>
                </Card.Body>
            </Card>
       

        </div>
    )
}

export default Country;