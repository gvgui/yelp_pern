/**
 * This is the context, it is used to pass to props without having to manually pass them
 */
import React, {useState, createContext} from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = props => {
    const [restaurants, setRestaurants] = useState([]);
    
    const addRestaurants = (restaurant) => {
        setRestaurants([...restaurants, restaurant]);
    }
    return (
        <RestaurantsContext.Provider value={{restaurants, setRestaurants, addRestaurants}}>
            {props.children}
        </RestaurantsContext.Provider>
    )
}