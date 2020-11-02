import React from 'react';

const Vehicleiew = ( {vehicle} ) => {

    const { thumbnail, name, description, price } = vehicle;
    return(
        
    <div className="card" >
        {
            console.log(vehicle)
        }
        <img src={ thumbnail } class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <h3 class="card-text">{description}</h3>
            <h5 class="card-text">{price}</h5>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    )
}

export default Vehicleiew;