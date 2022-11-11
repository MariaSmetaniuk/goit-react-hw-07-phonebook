import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/api';
// fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену "contacts/fetchAll".
// addContact - додавання контакту (метод POST). Базовий тип екшену "contacts/addContact".
// deleteContact - видалення контакту (метод DELETE). Базовий тип екшену "contacts/deleteContact".

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const data = await API.getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const data = await API.postContact(contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (contact, { getState }) => {
      const { contacts } = getState();

      const isContactAdded = contacts.items.find(
        item => item.name === contact.name
      );
      if (isContactAdded) {
        alert(`${contact.name} is already in contacts.`);
        return false;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const data = await API.deleteContact(id);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
