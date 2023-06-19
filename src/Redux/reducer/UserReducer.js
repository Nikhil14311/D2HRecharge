
const initialState = {
    users : {},
    mobileRecharge : []
};
export const userReducer = (state = initialState, action) => {
    console.log("userreducers",state,action)
    switch(action.type){
        case COUNTER_CHANGE:
            // users.map((key)=> {
            //     console.log('counter change',key)
            //     if(key.id === action.payload.id){
            //         key.bio = action.payload.value
            //     }
            // })
            return{
                ...state,
                users : action.payload
                
            }
        default : 
            return state;
    }
}