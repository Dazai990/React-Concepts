import { useReducer } from "react";

const initialState = {count:0}
//global reducer function
function countReducer(state,action){
switch(action.type){
    case "Increment": return {count: state.count+1};
    case "Decrement": return {count: state.count-1};
    case "Reset" : return {count:0}
}}
const IncreDecre = ()=>{
    const [state,dispatch] = useReducer(countReducer,initialState);
    //event Handler
    const handleIncrement = ()=>{
        dispatch({type:"Increment"})
    }
    const handleDecrement = ()=>{
        dispatch({type:"Decrement"})
    }
    const reset = ()=>{
        dispatch({type:"Reset"}) 
    }
    return (
        <div>
            <h2>Count : {state.count}</h2>
            <div className="gap-2 d-flex justify-content-center mt-5">
            <button className="btn btn-danger" onClick={handleDecrement}>-</button>
            <button className="btn btn-primary" onClick={reset}>Reset</button>
            <button className="btn btn-success" onClick={handleIncrement}>+</button>
            </div>
        </div>
    )
}
export default IncreDecre;
