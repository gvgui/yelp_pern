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
        setSelectedRestaurant(response.data.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [])
  return (
    <div>
        <h1 className="font-weight-light display-1 text-center">{selectedRestaurant && selectedRestaurant.restaurant.name}</h1>
        <div className="text-center">
          <StarRating rating={selectedRestaurant.restaurant.average_rating} />
          <span className='text-warning ml-1'>
            {selectedRestaurant.restaurant.count ? `(${selectedRestaurant.restaurant.count})` : "(0)"}
          </span>
        </div>
        <div>{selectedRestaurant && (
          <>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
            <AddReview />
          </>
        )}</div>
    </div>
  )
}

export default RestaurantDetailPage;