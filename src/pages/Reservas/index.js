import React from 'react';
import api from '../../services/api';
import {MdDelete} from 'react-icons/md'

import './index.css';

export default function Reservas() {
 return (
   <div>
       <h1 className="title">você solicitou  1 reservas</h1>

       <div className="reservas">
        <img src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg" alt="Teste"/>
        <strong>Viagem Maceio 7 dias</strong>
        <span>Quantidade: 2</span>
        <button type="button" onClick={() => {}}>
          <MdDelete sizes={30} color="#191919"/>
        </button>
       </div>
       <footer>
         <button type="button" onClick={() => {}}>Solicitar Reservas</button>
       </footer>
   </div>


 );
}