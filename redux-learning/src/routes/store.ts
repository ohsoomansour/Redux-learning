import {legacy_createStore as createStore} from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text:string) => {
    return {
      type: ADD,
      text
    };
  };
  
const deleteToDo = (id:string) => {
    return {
      type: DELETE,
      id: parseInt(id)
    };
  };
  
const reducer = (state = ["Testing"], action:any) => {
    switch(action.type){
        case ADD:
            return [{text: action.text, id: Date.now() }, ...state ]
        case DELETE:
            return state.filter(toDo => toDo.id !== action.id);
        default:
            return state;
    }
}

const store = createStore(reducer); //state = ["Testing"]

export const actionCreators = {
    addToDo,
    deleteToDo
}

export default store;