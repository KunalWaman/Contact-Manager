import React, { useState , useEffect} from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import Contactlist from "./Contactlist";
import Contactcard from './Contactcard';

function App() {
  const LOCAL_STORAGE_KEY ="contacts";
const [contacts ,setContacts] = useState([]);
 
const addContactHandler =(contact) => {
  console.log(contact);
 setContacts ([...contacts, contact]);
}
useEffect (() => {
  const retriveContacts =JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY ));
  if(retriveContacts) setContacts(retriveContacts);
}, []);

useEffect (() => {
  localStorage.setItem(LOCAL_STORAGE_KEY ,JSON.stringify(contacts));
}, [contacts]);
  return (
  <div className="ui container" >
    <Header />
    <AddContact addContactHandler = {addContactHandler} />
    <Contactlist contacts= {contacts}  />
   
  </div>
  );
}
 // const recent =[
  //   {
  //    id:"*",
  //    name :"v",
  //    email:"v@gmail.com",
  //   },
  //   {
  //     id:"*1",
  //     name :"s",
  //     email:"s@gmail.com",
  //    }
  // ]


    {/* //recent ={recent} */}

export default App;
