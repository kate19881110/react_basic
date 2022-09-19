import React, { useContext } from 'react'
import Main from './Main'
import Context from '../../store'

// useContext 數據共享
// export const Context = React.createContext({
//     loading: false,
//     name: 'jack'
// })


const useContextPage=(props)=>{
    const ctx = useContext(Context)
    console.log(ctx)
    return(
        <div>
            {ctx.loading && "Loading..."}
            <Main Context={Context}/>
        </div>
    )
}


export default useContextPage