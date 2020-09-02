import React from 'react';
import {MdDelete} from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux';
import { removeReserve } from '../../store/modules/reserve/actions';

import './index.css';

export default function Reservas() {

  const dispatch = useDispatch();

  const reserves = useSelector(state => state.reserve)

  function handleRemove(id){
    dispatch(removeReserve(id));
}

 return (
   <div>
       <h1 className="title">você solicitou {reserves.length} reservas</h1>
      {reserves.map(reserve => ( 
       <div className="reservas" key={reserve.id}>
          <img src={reserve.image} alt={reserve.title}/>
          <strong>{reserve.title}</strong>
          <span>Quantidade: {reserve.amount}</span>
          <button type="button" onClick={() => handleRemove(reserve.id)}>
            <MdDelete sizes={30} color="#191919"/>
          </button>
       </div>
      ))}
       <footer>
         <button type="button" onClick={() => {}}>Solicitar Reservas</button>
       </footer>
   </div>


 );
}