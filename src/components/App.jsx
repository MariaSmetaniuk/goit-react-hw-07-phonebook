import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { useFilteredContacts } from 'hooks/useFilteredContacts';
//styles
import { GlobalStyle } from './GlobalStyle';
//components
import { Box } from './Box';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Notification } from './Notification/Notification';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filteredContacts = useFilteredContacts();
  const isContacts = contacts.length > 0;
  const isContactsShown = isContacts && filteredContacts.length > 0;

  return (
    <Box p={5} as="main">
      <Box
        width="430px"
        p={4}
        mx="auto"
        bg="white"
        borderRadius="md"
        boxShadow="primary"
        color="text"
      >
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Box mt={4}>
          {isContacts && <Filter />}
          {isContactsShown && <ContactList />}
          {!isContacts && <Notification />}
        </Box>
      </Box>
      <GlobalStyle />
    </Box>
  );
};
