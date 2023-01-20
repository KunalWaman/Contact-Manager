import React from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import Contactlist from "./Contactlist";
import Contactcard from './Contactcard';

function App() {
  const contacts =[
    {
      id:"1",
      name:"omkar",
      email:"omkar@gmail.com",
    },
    {
      id:"2",
      name:"om",
      email:"om@gmail.com",
    }
  ]
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
  return (
  <div className="ui container" >
    <Header />
    <AddContact/>
    <Contactlist contacts= {contacts}  />
     <Contactcard />
  </div>
  );
}

export default App;
