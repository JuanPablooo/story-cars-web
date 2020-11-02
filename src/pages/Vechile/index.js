import React, { useState, useEffect } from 'react';

import NavBar from '../../components/NavBar';
import VehicleView from '../../components/VehicleView';

import { vehicle }  from '../../services/index';

function App( props ) {
    
  const [car, setCar] = useState({});
  const findCar = async ()=>{
      const { data } = await vehicle.findOne(props.match.params.id);
      setCar(data)
  }
  useEffect(()=>{
    findCar()

  }, []);
  return (
    <div className="">
      <NavBar/>
      <header className="App-header">
        <VehicleView vehicle={car}/>
        
      </header>
    </div>
  );
}

export default App;