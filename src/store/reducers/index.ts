import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  modal: modalReducer,
  counter: counterReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;