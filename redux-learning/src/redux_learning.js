/** 
 * *참고 블로그 : https://despiteallthat.tistory.com/192
 * @Action : 앱에서 store에 운반할 데이터 (액션은 자바스크립트 객체 형식이고 '주문서' 역할) 
 * @Reducer : Action - Reducter, 액션=주문을 보고 Store상태를 업데이트(data를 변경) - Store  
   - createStore : 함수 형태 필수이고  reducer 주기 요구

 * @store : store가 하는 일은 기본적으로 data를 넣을 수 있는 장소를 생성
 * @createStore :  
 * @const countStore = createStore(reducer): 의 결과
 * @counstStore :
    1)ƒ observable()
    2)ƒ dispatch(action) : (store의 내장 함수) "action을 파라미터로 전달-> reducer를 호출"
    3)ƒ getState() : reducer가 업데이트한 결과 값을 반환
    4)ƒ replaceReducer(nextReducer)
    5) ƒ subscribe(listener)
   @subscribe : store 안에 있는 data 변화를 알 수 있다.  
 *    
 */ 

   import { legacy_createStore as createStore } from 'redux';


   const add = document.getElementById('add');
   const minus = document.getElementById('minus');
   const number = document.querySelector('span');
   
   //리듀서 함수가 상태를 직접 갱신해야 한다. 전역 변수로 관리되면 일관성을 벗어난다. 
   const reducer = (state = 0, action) => {
     //initial state 값 0 생성됨
     switch (action.type) {
       case 'add' :
         return state + 1;
       case 'minus' :
         return state - 1;
       default:
         return state;
     }
    
   };
   const countStore = createStore(reducer);
   const addHandler = () => {
     countStore.dispatch({type: 'add'})
   }
   const minusHandler = () => {
     countStore.dispatch({type: 'minus'})
   }
   add.addEventListener('click', addHandler);
   minus.addEventListener('click', minusHandler);
   
   const onChange = () => {
     number.innerText = countStore.getState();
   }
   countStore.subscribe(onChange);
   
   
   
   