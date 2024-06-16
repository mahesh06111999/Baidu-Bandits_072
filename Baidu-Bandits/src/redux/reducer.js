import { FETCH, UPDATE, ADDTOSCHEDULE, COMPLETE } from './actionTypes';

export const init = {
  schedulearr: [],
};

export const reducer = (state = init, action) => {
  switch (action.type) {
    case FETCH:
      return { ...state, schedulearr: action.payload }; // Assuming payload is an array of schedule items

    case UPDATE:
      return {
        ...state,
        schedulearr: state.schedulearr.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case ADDTOSCHEDULE:
      return {
        ...state,
        schedulearr: [...state.schedulearr, action.payload],
      };

    case COMPLETE:
      return {
        ...state,
        schedulearr: state.schedulearr.filter(
          (item) => item.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
