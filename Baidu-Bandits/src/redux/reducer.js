import { FETCH, UPDATE } from "./actionTypes";

export const reducer =(state,action)=>{
    switch (action.type) {
        case FETCH:
            return action.payload
        case UPDATE:
            return {
                ...state,
                payload
            }

        default:
            return state
    }

}