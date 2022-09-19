// import UseContext from './pages/Home/useContext/UseContext';
import UseContext from './useContext/UseContext'
import UseReducer from './useReducer/index'
import UseMemo from './useMemo/index'
import UseEffect from './useEffect/index'
import UseCallback from './useCallback/index'

const HookPage=()=>{
    return(
        <div>
            <h1>Hook</h1>
            <p>UseContext</p>
            <UseContext/>
            <p>UseReducer</p>
            <UseReducer/>
            <p>UseMemo</p>
            <UseMemo/>
            <p>useEffect</p>
            <UseEffect/>
            <p>UseCallback</p>
            <UseCallback/>
        </div>
    )
}

export default HookPage