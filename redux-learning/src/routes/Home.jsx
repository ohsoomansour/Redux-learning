import { useState } from "react"
import { connect } from "react-redux";
import { actionCreators } from "./store";
import  ToDo  from "../components/ToDo";

function Home ({toDos, addToDo}) {
    console.log(toDos, addToDo);
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    }    
    const onSubmit = (e) => {
        e.preventDefault();
        addToDo(text); //*이벤트 처리 요청: dispatch가 반환 값(=addToDo) -> action은 addToDo함수가 반환한 type의 "ADD"
        setText("");
    }
    return (
     <div>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text}  onChange={(e) => onChange(e)} />
            <button >Add</button>
        </form>
        <ul>
           {toDos.map(toDo =>(
             <ToDo {...toDo} key={toDo.id} />
           ))} 
        </ul>
     </div> 

    )
}

/** 
 * @mapStateProps 함수 : 
 *  - 개념: Redux의 스토어 상태를 컴포넌트의 props로 매핑하는 역할 
 *  - param: 첫 번째 인자, 여기서 state는  'Redux 스토어의 state를 의미'(=Provider 컴포넌트 store 속성 값 상속 받음) 
 *                         mapStateProps함수는 '필요한 부분을 선택'(= state 또는 ownProps) ->  props로 전달
 *                       두 번째 인자(=ownProps), 'compont의 props'에서 왔다. 
 * 
 * 
 * @Connect 함수 : 
 * - 개념: React 컴포넌트를 Redux 스토어에 연결하는 고차 함수
 *        <Home />  --- Redux 스토어 연결 - '스토어의 state' ->  Home 컴포넌트의 'props'로 전달 
 *        Home 컴포넌트는 props.toDos 이런식으로 사용
 *        Home 컴포넌트는 Redux 스토어의 상태를 구독하고, 스토어의 상태를 사용
 */

function mapStateToProps(state, ownProps){
    return {toDos: state};  //store.js에서 const store = createStore(reducer) 반환 값 
 }

/**
 *@mapDispatchToProps : Home 컴포넌트의 props로 디스패치 전달 
*/
function mapDispatchToProps(dispatch) {
    return {
        addToDo: text => dispatch(actionCreators.addToDo(text)) // {type: ADD, text } 
    }     
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);