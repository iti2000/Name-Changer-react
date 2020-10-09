
export const SurnameReducer = (state,action) =>{
    switch(action.type){
        case 'CHANGE' :
             return (action.surname)
        case 'APPEND' :
            return state+=action.surname
        case 'RESET' :
            return (state="Patel")
        default:
            return state
    }
}