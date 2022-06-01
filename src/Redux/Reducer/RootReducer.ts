
import A from "../contants/Constants";

const initialState: any = {
  user: []
}

let rootReducer = (state:any =initialState , action: any) => {
  switch (action.type) {
    case A:
      return {
        ...state,
        user:action.payload
        
        // user:[...state.user,action.payload]
        // user: [...state.user,action.data]
      }

    default:
      return state
  }

}

export default rootReducer;
