import React, { useMemo } from 'react'

const obj1 = {id:"12",name:"jack"}
const obj2 = {id:"14",name:"ben",age:23}

const MemoPage =()=>{

    const memoizedValue = useMemo(()=> Object.assign(obj1,obj2),[obj1, obj2])
    console.log("useMemo",memoizedValue)
    return(
        <div>
            {memoizedValue.name}
        </div>
    )
}

export default MemoPage