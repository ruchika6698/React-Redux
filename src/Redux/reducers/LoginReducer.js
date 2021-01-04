const initialState = {
  user:[]
};
  
export const LoginReducer = (state = initialState, action) => { 
    if(action.type==='REGISTER'){
      console.log("Reducer State",state)
      // let a=...state.user;
      console.log("reducer action",action.payload)
      return{
        ...state,
        user:action.payload
      }
    }
    return state
};