const addContact = require('./contacts-operations/addcontact');
const getContactById = require('./contacts-operations/getcontactbyid');
const listContacts = require('./contacts-operations/listcontacts');
const removeContact = require('./contacts-operations/removeContact'); 
const argv = require('yargs').argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      listContacts();
      break;

    case 'get':
      getContactById(id);
      break;

    case 'add':
      addContact(name, email, phone);
      break;

    case 'remove':
      removeContact(id);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);

// const { Command } = require('commander');
// const program = new Command();

// program
//   .option('-a, --action <type>', 'choose action')
//   .option('-i, --id <type>', 'user id')
//   .option('-n, --name <type>', 'user name')
//   .option('-e, --email <type>', 'user email')
//   .option('-p, --phone <type>', 'user phone');

// program.parse(process.argv);

// const argv = program.opts();

// function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case 'list':
//       listContacts();
//       break;

//     case 'get':
//       getContactById(id);
//       break;

//     case 'add':
//       addContact(name, email, phone);
//       break;

//     case 'remove':
//       removeContact(id);
//       break;

//     default:
//       console.warn('\x1B[31m Unknown action type!');
//   }
// }

// invokeAction(argv);

(async () => {
    // const allContacts = await listContacts();
    // console.log(allContacts);

    // const oneContact = await getContactById(5);
    // console.log(oneContact);

  // const newContact = {
  //   name: "Alex",
  //   email: "jejdhrhlgt",
  //   phone: "8567i68",
  // };

  //   const newContactResult = await addContact(newContact);
  //   console.log(newContactResult);

 
  // const deleteContact = await removeContact('03bb7bfd-eca7-47c3-a4b4-19b655e56fff');
  // console.log(deleteContact);
})();