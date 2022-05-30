import A from "../contants/Constants";
import initialState from "../initialState/InitialState";


let rootReducer=(oldState=initialState,action:any)=>{
    debugger
    let newState = oldState;
    switch(action.type){
        case A:
          return newState
        default:
      }
      debugger
    return newState;

}

export default rootReducer;