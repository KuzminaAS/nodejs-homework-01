const { v4 } = require("uuid");
const listContacts = require('./listcontacts');
const writeContacts = require('./writeContacts');

const addContact = async (name, email, phone) => {
  try {
    const contacts = await listContacts();
    const id = v4();
    const newContact = {
    id,
    name,
    email,
    phone,
  };
    contacts.push(newContact);
    await writeContacts(contacts);
    console.table(newContact);
    return newContact;
  } catch (error) {
    throw error;
  }
}
module.exports = addContact;
