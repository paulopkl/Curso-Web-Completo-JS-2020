import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import Blabla from './componentes/primeiro';
// import BomDia from './componentes/bomDia';
// import Multi from './componentes/multiplos';
// import Saudacao from './componentes/saudacao';
import Pai from './componentes/pai';
import Filho from './componentes/filho';

// const elemento = <h1>Const elemento</h1>;

ReactDOM.render(
  <div>
    {/* {elemento} */}
    {/* <Multi.BoaTarde nome="Ana"></Multi.BoaTarde>
    <Multi.BoaNoite nome="Paulo"></Multi.BoaNoite>
    <Saudacao tipo="Bom dia" nome="Paulo"></Saudacao> */}
    <Pai nome="Fernando" sobrenome="Silva">{/*  */}
      <Filho nome="Pedro"></Filho>
      <Filho nome="Paulo"></Filho>
      <Filho nome="Carla"></Filho>
    </Pai>
  </div>
, document.getElementById('root'));

// $('<h1>').html('React 2')