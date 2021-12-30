import React, { useState } from 'react';
import './App.css';
import { Table } from 'evergreen-ui/';
import InputFIeld from './components/ui/InputField';

const Challenge2 = () => {
  const [value, setValue] = useState({name: '', lastName: '', age: undefined, weight: undefined, height: undefined });
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItems = [...items];
    newItems.push(value);
    setItems(newItems);
    setValue({name: '', lastName: '', age: undefined, weight: undefined, height: undefined });
  }

  return (  
    <div className="App-header challenge-2-header">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-container">
          <label htmlFor="name">
            <p className="label-text">Nombre</p>
            <InputFIeld
              id="name"
              placeholder="Escribe tu nombre"
              type="text"
              value={value.name}
              setValue={(value) => setValue((prevState) => ({
                ...prevState, name: value,
              }))}
              required
            />
          </label>
          <label htmlFor="lastName">
            <p className="label-text">Apellido</p>
            <InputFIeld
              id="lastName"
              placeholder="Escribe tu apellido"
              type="text"
              value={value.lastName}
              setValue={(value) => setValue((prevState) => ({
                ...prevState, lastName: value,
              }))}
              required
            />
          </label>
          <label htmlFor="age">
            <p className="label-text">Edad</p>
            <InputFIeld
              id="age"
              placeholder="Escribe tu edad"
              type="number"
              value={value.age}
              setValue={(value) => setValue((prevState) => ({
                ...prevState, age: value,
              }))}
              required
          />
          </label>
          <label htmlFor="weight">
            <p className="label-text">Peso</p>
            <InputFIeld
              id="weight"
              placeholder="Escribe tu peso"
              type="number"
              value={value.weight}
              setValue={(value) => setValue((prevState) => ({
                ...prevState, weight: value,
              }))}
              required
            />
          </label>
          <label htmlFor="height">
            <p className="label-text">Altura</p>
            <InputFIeld
              id="height"
              placeholder="Escribe tu altura"
              type="number"
              value={value.height}
              setValue={(value) => setValue((prevState) => ({
                ...prevState, height: value,
              }))}
              required
            />
          </label>
          <InputFIeld
            className="submit-button"
            id="submit"
            disabled={!value.name || !value.age || !value.age || !value.weight || !value.height}
            type="submit"
            value="Enviar"
            setValue={() => {}}
          />
        </div>
      </form>
      <div className="table-container">
        <Table marginTop={0} maxWidth={800}>
          <Table.Head>
            <Table.TextHeaderCell>NOMBRE</Table.TextHeaderCell>
            <Table.TextHeaderCell>APELLIDO</Table.TextHeaderCell>
            <Table.TextHeaderCell>EDAD</Table.TextHeaderCell>
            <Table.TextHeaderCell>PESO (KG)</Table.TextHeaderCell>
            <Table.TextHeaderCell>ALTURA (M)</Table.TextHeaderCell>

          </Table.Head>
          <Table.Body height={380} maxWidth={800} width="100%">
          {items.length > 0 && items.map((item) => (
              <Table.Row key={item.name + item.lastName + item.age}>
                <Table.TextCell>{item.name}</Table.TextCell>
                <Table.TextCell>{item.lastName}</Table.TextCell>
                <Table.TextCell>{item.age}</Table.TextCell>
                <Table.TextCell>{item.weight} kg</Table.TextCell>
                <Table.TextCell>{item.height} m</Table.TextCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default Challenge2;
