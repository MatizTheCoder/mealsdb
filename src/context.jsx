import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext()
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=A'
const radnomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
 

const AppProvider = ({ children }) => {
    const [meals, setMeals] = useState([])
    
    const fetchMeals = async(url) => {
        try {
            const {data} = await axios(url)
            setMeals(data)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        fetchMeals(allMealsUrl)
        
    },[])

    return (
        <AppContext.Provider
        value={{meals}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }