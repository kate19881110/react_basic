import { useEffect,useState } from "react"


const useEffectPage=()=>{
    const [count,setCount] = useState(0)
    useEffect(()=>{
        document.title=`標題你點擊了${count}次`
    },[count])

    return(
        <div>
            <p>內文你點擊{count}次</p>
            <button onClick={()=>setCount(count+1)}>點擊</button>
        </div>
    )
}

export default useEffectPage