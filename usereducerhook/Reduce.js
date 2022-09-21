import React  ,{useReducer}   from 'react';

const initialstate=0;

const reducer=(state, action)=>{
console.log(state, action);
   if(action.type==="increment"){
       return state+10;
   }if(action.type==="decrement"){
       return state-1;
   }
    return state;
}

const Reduce =()=>{
// const [count, setcount] = useState('0');
  

const [state, dispatch] = useReducer(reducer,initialstate);

    return(<>
        <h2>{state}</h2>
    <button onClick={()=>dispatch({type:"increment"})}>inc </button>
    // <button onClick={()=>dispatch({type:'decrement'})}>dec</button>
    </>
    )
};
export default Reduce;
