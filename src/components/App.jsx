import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
// selectors
import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsContacts,
  selectIsContactsShown,
  selectIsLoading,
  selectError,
} from 'redux/selectors';
//styles
import { GlobalStyle } from './GlobalStyle';
//components
import { Box } from './Box';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Notification } from './Notification/Notification';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isContacts = useSelector(selectIsContacts);
  const isContactsShown = useSelector(selectIsContactsShown);
  const isLoading = useSelector(selectIsLoading);
  const errorMessage = useSelector(selectError);

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
          {errorMessage && <p>{errorMessage}</p>}
          {isContacts && <Filter />}
          {isLoading && <Loader />}
          {isContactsShown && <ContactList />}
          {!isContacts && !isLoading && !Error && <Notification />}
        </Box>
      </Box>
      <GlobalStyle />
    </Box>
  );
};
