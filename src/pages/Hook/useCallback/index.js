import React, { useCallback } from 'react'

const obj1 = {id:"12",name:"jack"}
const obj2 = {id:"14",name:"ben",age:23}

const MemoPage =()=>{

    const memoizedFn = useCallback(()=> Object.assign(obj1,obj2),[obj1, obj2])
    console.log("memoizedFn",memoizedFn())
    return(
        <div>
            {memoizedFn().age}
        </div>
    )
}

export default MemoPage