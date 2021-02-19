import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const INITIALIZE = 'counter/INITIALIZE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const initialize = createAction(INITIALIZE);

const initialState = {
  number: 1,
};

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
    [INITIALIZE]: state => initialState,
  },
  initialState,
);

export default counter;