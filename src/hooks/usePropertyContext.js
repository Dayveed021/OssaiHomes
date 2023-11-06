import { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";

const usePropertyContext = () =>{
    const context = useContext(PropertyContext);
    console.log(context);

    if(!context) {
        throw Error("usePropertyContext must be use inside a propertyContextProvider");
    }
    return context;
}

export default usePropertyContext;