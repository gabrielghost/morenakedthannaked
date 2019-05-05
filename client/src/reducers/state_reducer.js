import {
    TICK_INDEX
} from '../actions/types';

const initialState = {
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TICK_INDEX:
      return { ...state, tick: action.payload.data };
  }
  return state;
}
