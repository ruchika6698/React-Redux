const initialState = {
  user:[]
};
  
export const LoginReducer = (state = initialState, action) => { 
    if(action.type==='REGISTER'){
      console.log("Reducer State",state)
      console.log("reducer action",action.payload)
      return{
        ...state,
        user:state.user.concat(action.payload)
      }
    }
    return state
};