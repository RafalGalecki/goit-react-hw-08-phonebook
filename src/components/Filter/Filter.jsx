import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filterId = nanoid();

  const handleChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <div className={css.filter}>
      <div className={css.labelled} >
        <label htmlFor={filterId}>Find contacts</label>
        <input
          className={css.inputFilter}
          id={filterId}
          type="search"
          placeholder="Enter name"
          onChange={event => handleChange(event)}
        ></input>
      </div>
    </div>
  );
};

export default Filter;
