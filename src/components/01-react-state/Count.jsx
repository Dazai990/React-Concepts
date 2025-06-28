import {useState} from 'react';

const Count = ()=>{
    const [count, setCount] = useState(0);

    const increment =()=>
         setCount(prev=>prev+1);
    const decrement = ()=>
        setCount(prev=>prev-1);

    const reset = ()=>
        setCount(0)
    return (
        <div>
              <h1>Count : {count}</h1>
              <button onClick={decrement}>-</button>
              <button onClick={reset}>Reset</button>
              <button onClick={increment}>+</button>
        </div>
    )
}
export default Count;
