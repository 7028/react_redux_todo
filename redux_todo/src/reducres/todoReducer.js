const intialData = {
    list: [],
    temStr:""
}

export const todoReducers = (state = intialData, action) => {
    switch (action.type) {
        case "ADDTODO":
        
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }]
    
            }

            case "EDIT_ITEM":
                const temData = state.list.find((elem, id)=> elem.id === action.payload)
                console.log("temData",temData);
                return{
                    ...state,
                    temStr: temData,
                   
                }

                case "UPDATE_ITEM":
                    const newList = state.list.map((e) => e.id === action.payload.id ? { ...e, data: action.payload.data } : e)
                    console.log("newlist", newList)
                    return {
                        ...state,
                        list: newList,
                        tempStr: ""
                    }

                case "DELETE_TODO":
                    console.log("action", action.payload.id)
                    return{
                        ...state,
                      list: state.list.filter((elem) => elem.id !== action.payload.id)  
                    }

    }
    deafult: return state;

}