import { tassign } from "tassign";
import { INCREMENTAR } from "./actions";
export interface IAppState {
  counter: number;
}

export const INITIAL_STATE: IAppState = {
  counter: 0
}

export function rootReducer(state: IAppState, action): IAppState {
  switch ( action.type ) {
    case INCREMENTAR:
      return tassign( state, { counter: state.counter + 1 } );
  
    default:
      break;
  }
  return state;
}