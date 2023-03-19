const fs = require("fs/promises");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const BASE_PATH = path.join("models", "contacts.json");
const list = async function () {
  const list = await fs.readFile(BASE_PATH);
  return JSON.parse(list);
};

const listContacts = async () => {
  return await list();
};

const getContactById = async ({ contactId }) => {
  const db = await list();
  const result = db.filter((contact) => contact.id === contactId);

  return result;
};

const removeContact = async ({ contactId }) => {
  const db = await list();

  const inDB = db.find((contact) => contact.id === contactId);
  if (inDB) {
    const result = db.filter((contact) => contact.id !== contactId);
    fs.writeFile(BASE_PATH, JSON.stringify(result));
    return { status: 200, msg: "contact deleted" };
  }

  return { status: 404, msg: "Not found" };
};

const addContact = async (body) => {
  const db = await list();
  const newContact = { ...body, id: uuidv4() };

  const result = [...db, newContact];

  fs.writeFile(BASE_PATH, JSON.stringify(result));
  return newContact;
};

const updateContact = async ({contactId}, body) => {
  const db = await list()
  const inDB = db.find((contact) => contact.id === contactId);
  if (inDB) {
    const result = db.map(el=>{
      if(el.id===contactId){
        return {...el, ...body}
      }
      return el
    })
   fs.writeFile(BASE_PATH, JSON.stringify(result))
  return { status: 200, msg: "Contact update" }

  }
  
  return { status: 404, msg: "Not found" }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
