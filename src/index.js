import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeraApp from './PrimeraApp';

// css
import  './index.css';
import CounterApp from './CounterApp';

const divRoot = document.querySelector('#root');
// 
// ReactDOM.render( <PrimeraApp saludo="Hola Mundo" />, divRoot );

ReactDOM.render( <CounterApp value={1} />, divRoot)




