import { useReducer } from "react";
import Context from "./Context";
import reducer, { initState }  from "./reducer";
import logger from './logger'



function Provider({children}) {
    const [state,dispatch]=useReducer(logger(reducer),initState)
    return (
        <div>
            <Context.Provider value={[state,dispatch]}>
                {children}
            </Context.Provider>
        </div>
    )
}
export default Provider;