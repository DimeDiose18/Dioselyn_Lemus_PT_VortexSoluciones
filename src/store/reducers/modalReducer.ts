import { OPEN_MODAL, CLOSE_MODAL, ModalActionTypes } from '../actions/modalAction';

interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: true
};

const modalReducer = (state = initialState, action: ModalActionTypes): ModalState => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false
      };
    default:
      return state;
  }
};

export default modalReducer;
