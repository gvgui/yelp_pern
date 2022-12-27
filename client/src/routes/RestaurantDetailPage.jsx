import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';
import AddReview from '../components/AddReview';
import Reviews from '../components/Reviews';
import StarRating from '../components/StarRating';
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantDetailPage = () => {
  const {id} = useParams();
  const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data.restaurant);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [])
  return (
    <div>
        <h1 className="font-weight-light display-1 text-center">{selectedRestaurant && selectedRestaurant.name}</h1>
        <div>{selectedRestaurant && (
          <>
          <div className="mt-3">
            <Reviews />
            <AddReview />
          </div>
          </>
        )}</div>
    </div>
  )
}

export default RestaurantDetailPage;