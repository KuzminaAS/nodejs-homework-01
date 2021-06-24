const writeContacts = require('./writeContacts');
const listContacts = require('./listcontacts');


const removeContact = async (id) => {
    try {
        const contacts = await listContacts();
        const newContacts = contacts.filter((item) => item.id !== id);
        await writeContacts(newContacts);
    } catch (error) {
         throw error;
  }
}
module.exports = removeContact;