import { createContext, useEffect, useState } from "react";

export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const [fetchData,setFetchData]=useState([])

useEffect(()=>{
fetch('detail.json')
.then(res=>res.json())
.then(data=>setFetchData(data))
},[])


    const authInfo={fetchData}
    
    return (
        <div>
          <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>  
        </div>
    );
};

export default AuthProvider;