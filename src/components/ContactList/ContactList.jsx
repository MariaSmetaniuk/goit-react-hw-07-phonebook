import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';
import { useFilteredContacts } from 'hooks/useFilteredContacts';
import { Button } from 'components/Button/Button.styled';
import { List, Item } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useFilteredContacts();

  return (
    <List>
      {filteredContacts.map(({ name, id, number }) => (
        <Item key={id}>
          <span>{name}:</span> {number}
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
