import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { Button } from 'components/Button/Button.styled';
import { List, Item } from './ContactList.styled';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts.map(({ name, id, number }) => (
        <Item key={id}>
          <span>{name}:</span> {number}
          <Button type="button" /* onClick={} */>Delete</Button>
        </Item>
      ))}
    </List>
  );
};
