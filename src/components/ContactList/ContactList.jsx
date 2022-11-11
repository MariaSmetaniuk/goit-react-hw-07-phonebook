import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';
import { Button } from 'components/Button/Button.styled';
import { List, Item } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {filteredContacts.map(({ name, id, phone }) => (
        <Item key={id}>
          <span>{name}:</span> {phone}
          <Button type="button" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
