// reducers/counterReducer.ts
import { INCREMENT, CounterActionTypes } from '../actions/counterAction';

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0
};

const counterReducer = (state: CounterState = initialState, action: CounterActionTypes): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

export default counterReducer;
