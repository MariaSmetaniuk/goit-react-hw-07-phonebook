import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/selectors';
import { Label, Field } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  useEffect(() => {
    return () => dispatch(setFilter(''));
  }, [dispatch]);

  const onChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <Label>
      <span>Find contacts by name:</span>
      <Field type="text" name="filter" value={filter} onChange={onChange} />
    </Label>
  );
};
