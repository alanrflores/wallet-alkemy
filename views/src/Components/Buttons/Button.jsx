
import React from "react";



const Botons= ({ event, preset, value, type, payload}) => {
    
  
    // events can be passed to this child component to dispatch an action with data and or payload, updating the store 
    // in parent component we can set an useEffect to await for the results of the action or the updated store to re-render a specific DOM section with the request
    return (
        <> 
            <button type={type || null} className={preset || null} onClick={event ? (e) => {
                e.preventDefault()
                event()
            } : (e) => {
                e.preventDefault()
            }} > {value || "need a value here"}</button>
        </>
    )
}

export default Botons;