import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MintyBot from './components/chatbot/MintyBot'
import api from './utils/api'

const {getDish} = api();


export default class App extends React.Component {
  
  componentDidMount(){

    // Antes de cargar el componente, hago la petición al API con Axios.
    getDish();


    // PRUEBA DE CONEXION AL API CON AJAX

//     var invocation = new XMLHttpRequest();
//     var url = 'https://xz94zfs6u8.execute-api.eu-west-1.amazonaws.com/default/myBakery';
//     callOtherDomain();
   
//     function callOtherDomain() {
//     if(invocation) {    
//       invocation.open('GET', url, true);
//       invocation.send(); 
//       const respuesta = invocation.responseText;
//       console.log(respuesta)
//       console.log(invocation.LOADING)
//       console.log(invocation.statusText)
//       console.log(invocation.readyState, XMLHttpRequest.DONE)

//     }
// }

  
};




    render () {
      return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Click on the cha icon on the right corner to talk with our cheff!
          </p>
        </header>
        <MintyBot />
      </div>
      )
  };
}




