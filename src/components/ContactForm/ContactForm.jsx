import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { Formik } from 'formik';
import { Box } from 'components/Box';
import { Button } from 'components/Button/Button.styled';
import { Input, Label, FormStyled } from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);

  const handleSubmit = ({ name, number }, actions) => {
    const isContactAdded = contacts.find(contact => name === contact.name);

    if (isContactAdded) {
      alert(`${name} is already in contacts.`);
      return;
    }

    // dispatch(addContact({ name, number }));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Box my={4}>
        <FormStyled autoComplete="off">
          <Label>
            <div>Name</div>
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            <div>Number</div>
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </FormStyled>
      </Box>
    </Formik>
  );
};
