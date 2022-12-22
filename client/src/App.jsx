import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import RestaurantDetailPage from './routes/RestaurantDetailPage';

const App = () => {
    return <div className='container'>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route
                path="/restaurants/:id/update"
                element={<UpdatePage/>}
                />
                <Route
                path="/restaurants/:id"
                element={<RestaurantDetailPage/>}
                />
            </Routes>
        </Router>
    </div>;
};

export default App;