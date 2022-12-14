/**
 * This is the React App component
 * returns:
 * <contextProvider>
 *  <div container>
 *      <Routes>
 *      </Routes>
 *  </div>
 * </contextProvider>
 */
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import RestaurantDetailPage from './routes/RestaurantDetailPage';
import { RestaurantsContextProvider } from './context/RestaurantsContext';

const App = () => {
    return (
        <RestaurantsContextProvider> 
            <div className='container'> 
                <Router> 
                    <Routes> 
                        <Route exact path="/" element={<Home/>} /> 
                        <Route
                        exact path="/restaurants/:id/update"
                        element={<UpdatePage/>} 
                        /> 
                        <Route
                        path="/restaurants/:id"
                        element={<RestaurantDetailPage/>}
                        /> 
                    </Routes>
                </Router>
            </div>
        </RestaurantsContextProvider>
    ) 
};

export default App;