import React from 'react';
import imageDefault from '../../images/no-image.jpg';
import './index.css';

const Vehicleiew = ( {vehicle} ) => {

    const { thumbnail, name, description, price } = vehicle;
    
    return(
    <div className="card" >
        <img src={ thumbnail ? thumbnail: imageDefault  } className="card-img-top" alt={name}/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h3 className="card-text">{description}</h3>
            <h5 className="card-text">{price}</h5>
            <a href="#" className="btn btn-primary"> + Detalhes</a>
        </div>
    </div>
    );
}

export default Vehicleiew;