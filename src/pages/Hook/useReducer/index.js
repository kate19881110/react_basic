import React, { useReducer } from 'react'


const IndexPage=()=>{
    const initState = {count:0} // 初始state
    const reducer=(state,action)=>{
        // 變量action, action 描述更新 state
        switch(action.type){
            case 'reset':
                return initState;
            case 'increment':
                return {count: state.count+1};
            case 'decrement':
                return {count: state.count-1};
            default:
                return state
        }
    }
    const [state,dispatch] = useReducer(reducer,initState)
    return(
        <div>
            <p>當前 count的值為: {state.count}</p>
            <p><button onClick={()=>dispatch({type:'reset'})}>重置</button></p>
            <p><button onClick={()=>dispatch({type:'increment'})}>加一</button></p>
            <p><button onClick={()=>dispatch({type:'decrement'})}>減一</button></p>
        </div>
    )
}

export default IndexPage