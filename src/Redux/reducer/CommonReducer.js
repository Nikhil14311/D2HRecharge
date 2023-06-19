const initialState = {
    actions : []
}

export const commonReducer = (state = initialState, action) => {
    console.log("common reducer working",action)
    switch(action.type){
        case "USER_DATA" :
            return [...state,action.payload]
        default :
            return state
    }
}