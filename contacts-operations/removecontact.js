const listContacts = require('./listcontacts');
const updateContacts = require('./updatecontacts');

const removeContact = async (id) => {
    try {
        const contacts = await listContacts();
        const newContacts = contacts.filter((item) => item.id !== id);
        await updateContacts(newContacts);
    } catch (error) {
         throw error;
  }
}
module.exports = removeContact;