import { createContext } from "react";
import { useState } from "react";
export const PanierContext = createContext()

 export function PanierContextProvider({children }){
   const [panierList,setPanierList] = useState([])
   
    return (
      <PanierContext.Provider value={{panierList,setPanierList}}>
        {children}
      </PanierContext.Provider>
    )


}
