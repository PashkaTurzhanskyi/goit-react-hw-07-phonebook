import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Find, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilter = event => dispatch(setFilter(event.currentTarget.value));

  return (
    <Find>
      Find contacts by name
      <Input type="text" name="filter" value={filter} onChange={handleFilter} />
    </Find>
  );
};
