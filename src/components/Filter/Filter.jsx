import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filter/filterSlice';
import { Label, Field } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  useEffect(() => {
    return () => dispatch(setFilter(''));
  }, [dispatch]);

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <Label>
      <span>Find contacts by name:</span>
      <Field type="text" name="filter" value={filter} onChange={handleChange} />
    </Label>
  );
};
