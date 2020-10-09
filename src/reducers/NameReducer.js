

export const NameReducer = (state,action) =>{
    switch(action.type){
        case 'CHANGE' :
             return (action.name)
        case 'APPEND' :
            return state+=action.name
        case 'RESET':
            return (state="Iti")
        default:
            return state
    }
}
