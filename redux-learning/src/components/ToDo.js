import React from "react";
import { actionCreators } from "../routes/store";
import { connect } from "react-redux";

/** 
  *@connect (null, mapDispatchToProps)(ToDo) : 반환된 새로운 컴포넌트(ToDo)는 'Redux 스토어'에 연결되어 있으며, 
    mapDispatchToProps를 통해 액션 디스패치를 위한 props를 가집니다.
  */
function ToDo({text, onBtnClick}) {
    return(
        <li>
            {text} <button onClick={onBtnClick} >DEL</button>
        </li>
    )
}

// ownProp는 store의 state 값 
function mapDispatchToProps(dispatch, ownProps){
    console.log("ownProps", ownProps)
    return {
        onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(ToDo);

