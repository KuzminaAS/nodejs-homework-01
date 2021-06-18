const listContacts = require('./listcontacts');

const getContactById = async (id) => {
    try {
        const contacts = await listContacts();
        const contact = contacts.find((item) => item.id === id);
        // console.table(contact);
        return contact;
    } catch (error) {
        throw error;
    }
}
module.exports = getContactById;