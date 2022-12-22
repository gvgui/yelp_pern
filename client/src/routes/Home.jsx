/**
 * This is the home page of the application
 */
import React from 'react';
import AddRestaurant from '../components/AddRestaurant';
import Header from '../components/Header';
import RestaurantList from '../components/RestaurantList';

const Home = () => {
  return (
    <div>
        <Header/>
        <AddRestaurant/>
        <RestaurantList/>
    </div>
  );
};

export default Home;
