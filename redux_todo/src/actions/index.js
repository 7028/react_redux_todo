export const addTodo=(data)=>{
    return{
        type: "ADDTODO",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }

}

export const editItem=(id)=>{
    // console.log("id", id);
    return{
        type : "EDIT_ITEM",
        payload:  id
        
      
        
    }
}

export const updateItem=(id, updateValues)=>{
    // console.log("id", id);
    // console.log("Update Value", updateValues);
 return {
     type :"UPDATE_ITEM",
     payload:{
         id:id,
         data: updateValues
     }
    
 }
}
export const deleteTodo=(id)=>{
    console.log("id", id)
    return{
        type: "DELETE_TODO",
        payload:{
            id
        }
    }

}
export const removeTodo=()=>{
    return{
        type: "REMOVETODO"
    }

}