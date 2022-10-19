import React, { useContext, useEffect } from "react";

const AppContext = React.createContext()

const AppProvider = ({ children}) => {

    useEffect(() =>{
        const fatchData = async() => {
            try {
                const response = await fetch('https://randomuser.me/api/')
                const data = await response.json()
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        fatchData()
    },[])

    return (
        <AppContext.Provider
        value='hello'>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }