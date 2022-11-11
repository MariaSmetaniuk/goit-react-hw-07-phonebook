import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { Label, Field } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);

  return (
    <Label>
      <span>Find contacts by name:</span>
      <Field type="text" name="filter" value={filter} /* onChange={} */ />
    </Label>
  );
};
