import React from 'react';
import { useSelector } from 'react-redux';

const Filter = () => {
  const covidData = useSelector((data) => data.Reducer);
  return (
    <select className="flex stat-container">
      { covidData.map(({ id, name }) => (
        <option key={id}>{name}</option>
      ))}
    </select>
  );
};

export default Filter;
