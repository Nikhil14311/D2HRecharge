const initialState = {
    transactionhistory : [],
    mobileRecharge : [],
    userData : []
}
export const confirmReducer = (state = initialState,action) => {
    console.log("actions for confirm",action)
    switch(action.type){
        case "CONFIRM":
            return{
                ...state,
                transactionhistory : [...state.transactionhistory, action.payload],
            }   
        case "MOBILE_RECHARGE" :
            return{
                ...state,
                mobileRecharge : [...state.mobileRecharge, action.payload]
        }
        case "USER_DATA" : 
            console.log("userdata working")
            return{
                ...state,
                userData : [...state.mobileRecharge,action.payload]
            }
        default : 
            return state;
    }
}