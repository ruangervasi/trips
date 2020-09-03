import React from 'react';
import { MdDelete, MdAddCircle, MdRemoveCircle} from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux';
import { removeReserve, updateAmountRequest } from '../../store/modules/reserve/actions';

import './index.css';

export default function Reservas() {

  const dispatch = useDispatch();

  const reserves = useSelector(state => state.reserve)

  function handleRemove(id){
    dispatch(removeReserve(id));
}

function decrementAmount(reserve){
    dispatch(updateAmountRequest(reserve.id, reserve.amount - 1));
}

function incrementAmount(reserve){
  dispatch(updateAmountRequest(reserve.id, reserve.amount + 1));
}
 return (
   <div>
       <h1 className="title">você solicitou {reserves.length} reservas</h1>
      {reserves.map(reserve => ( 
       <div className="reservas" key={reserve.id}>
          <img src={reserve.image} alt={reserve.title}/>
          <strong>{reserve.title}</strong>
          <div id="amount">
            <button type="button" onClick={() => decrementAmount(reserve)}>
              <MdRemoveCircle size={20} color="#191919"/>
            </button>
            <input type="text" readOnly value={reserve.amount}/>
            <button type="button" onClick={() => incrementAmount(reserve)}>
              <MdAddCircle size={20} color="#191919"/>
            </button>
          </div>
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