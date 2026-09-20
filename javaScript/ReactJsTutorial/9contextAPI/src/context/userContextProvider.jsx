import React, { useState } from "react";
import UserContext from "./userContext";

const UserContextProvider=({children})=>{ //yaha childern ka matlab jo bhi aa rha ho (cards) usse hai
    const [user, setUser]=useState(null)

    return(
        //  we wrap the childer component with usercontext.Provider give acess of context globally
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    ) 
}
export default UserContextProvider;