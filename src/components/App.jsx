// selectors
import { useSelector } from 'react-redux';
import { selectIsContacts, selectIsContactsShown } from 'redux/selectors';
//styles
import { GlobalStyle } from './GlobalStyle';
//components
import { Box } from './Box';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Notification } from './Notification/Notification';

export const App = () => {
  const isContacts = useSelector(selectIsContacts);
  const isContactsShown = useSelector(selectIsContactsShown);
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
