import React, { useState } from 'react';
import { Table } from 'evergreen-ui/';
import InputField from './components/ui/InputField';
import './App.css';

const Challenge1 = () => {
const [value, setValue] = useState('')
const [items, setItems] = useState([])

const handleItems = () => {
  const newItems = [...items];
  const newValue = value.replace(/[^.0-9 ]/g, '').split(/\s+/);
  newValue.forEach((item) => newItems.push({ numero: item ? item : 0, resultado: parseInt(item ? item : 0) * 2 }));
  console.log(newItems);
  setValue('');
  setItems(newItems);
};

  return (
    <div className="App-header">
    <label htmlFor="challenge-1">
      <p className="label-text">Escribe los numeros que desea multiplicar</p>
      <InputField
          id="challenge-1"
          placeholder="Ejemplo: 1, 3, 4, 5 o 15 22 10"
          value={value}
          setValue={setValue}
          handleClick={handleItems}
          />
      </label>

        <Table marginTop={50}>
        <Table.Head>
          <Table.TextHeaderCell>numero</Table.TextHeaderCell>
          <Table.TextHeaderCell>resultado</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={380} width={400}>
        {items.length > 0 && items.map((item) => (
            <Table.Row key={item}>
              <Table.TextCell>{item.numero}</Table.TextCell>
              <Table.TextCell>{item.resultado}</Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      
    </div>
  );
}

export default Challenge1;
