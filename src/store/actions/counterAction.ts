export const INCREMENT = 'INCREMENT';

interface IncrementAction {
  type: typeof INCREMENT;
}

export type CounterActionTypes = IncrementAction;

export const increment = (): IncrementAction => ({
  type: INCREMENT
});