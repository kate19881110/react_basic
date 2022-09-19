import React, { useContext } from 'react'
import Context from '../../store'


const MainPage=()=>{
    const ctx = useContext(Context)
    console.log('main',ctx)
    return(
        <div>
            Main 
        </div>
    )
}


export default MainPage