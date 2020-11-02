import React, { useState, useEffect } from 'react';

import NavBar from '../../components/NavBar';
import VehicleView from '../../components/VehicleView';

import { vehicle }  from '../../services/index';

function App() {
  const [cars, setCars] = useState([]);
  const findCars = async ()=>{
      const { data } = await vehicle.list();
      console.log(data);
      setCars(data.content)
  }
  useEffect(()=>{
    findCars()


  }, []);
  return (
    <div className="">
      <NavBar/>
      <header className="App-header">
        {
          cars.map((car)=> <VehicleView car={car}/>)
        }
      </header>
    </div>
  );
}

export default App;