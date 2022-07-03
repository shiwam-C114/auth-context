import React, { createContext,useState } from "react";

const LoadingContext = createContext()

export function LoadingProvider({children}) {
    const [loading, toggleLoading] = useState(false)
    return(
        <LoadingContext.Provider value={[loading, toggleLoading]}>
            {children}
        </LoadingContext.Provider>
    )
    
}

export default LoadingContext