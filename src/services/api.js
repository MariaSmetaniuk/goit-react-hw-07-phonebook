import axios from 'axios';

axios.defaults.baseURL = 'https://63690f5e28cd16bba713dc31.mockapi.io';

export const getContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const postContact = async contact => {
  const response = await axios.post('/contacts', contact);
  return response.data;
};

export const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};
