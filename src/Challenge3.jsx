import React, { useState } from 'react';
import InputField from './components/ui/InputField';
import './App.css';

const Challenge3 = () => {
  const [value, setValue] = useState({ company: '', model: '', age: undefined });
  const [cars, setCars] = useState([]);
  const [selectedCars, setSelectedCars] = useState(null);
  
  const addCar = () => {
    const newCars = [...cars];
      newCars.push(value);
      setCars(newCars);
      setValue({ company: '', model: '', age: undefined });
  };

  const printFilteredCars = () => {
    const select = document.getElementById('car-select');
    const selected = select?.options[select.selectedIndex].value;
    setSelectedCars(selected);
  };

  return (
    <div className="App-header">
      <div className="cars-container">
          <InputField id="company" value={value.company} setValue={(event) => setValue((prevState) => ({ ...prevState, company: event }))} placeholder="Company" />
          <InputField id="company" value={value.model} setValue={(event) => setValue((prevState) => ({ ...prevState, model: event }))} placeholder="Model" />
          <InputField type="number" id="age" value={value.age} setValue={(event) => setValue((prevState) => ({ ...prevState, age: event }))} placeholder="Age" />
      </div>
      <button disabled={!value.company || !value.model || !value.age} className="add-car-button" type="button" onClick={addCar}>Add new car</button>

      {cars && cars.map((car) => (
        <div key={car} className="cars-container">
          <InputField id="car-company" value={car.company} disabled placeholder="Company" />
          <InputField id="car-model" value={car.model} disabled placeholder="Model" />
          <InputField id="car-age" value={car.age} disabled placeholder="Age" />
        </div>
      ))}

      <div>
      <div className="options-container">
        <label htmlFor="car-select">Choose a category:</label>
        <select name="cars" id="car-select">
          <option >--Please choose an option--</option>
          <option value="company">Company</option>
          <option value="model">Model</option>
          <option value="age">Age</option>
        </select>
        <button className="add-car-button" disabled={!cars.length} type="button" onClick={printFilteredCars} >Filter by year</button>
        </div>
        {selectedCars && cars.map((car) => (
          <p key={car}>{car[selectedCars]}</p>
        ))}
      </div>
    </div>
  );
}

export default Challenge3;
