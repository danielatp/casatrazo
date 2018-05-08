import axios from 'axios';

//INITIAL STATE
const defaultShowModal = false;

//ACTION TYPES
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

//ACTION CREATORS
export const openModal = () => ({
  type: OPEN_MODAL,
  showModal:true
})

export const closeModal = () => ({
  type: CLOSE_MODAL,
  showModal:false
})


//REDUCER
export default function (state = defaultShowModal, action){
   switch (action.type){
    case OPEN_MODAL:
      return action.showModal;

    case CLOSE_MODAL:
      return action.showModal;

    default:
      return state;
   }
}
