/**
 * This is the component that renders the restaurant list on the home page
 */
import React, { useEffect, useContext } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantList = (props) => {
    const {restaurants, setRestaurants} = useContext(RestaurantsContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get("/");
                setRestaurants(response.data.data.restaurants);
            } catch(err) {
               /* res.status(500).json ({
                    status: "fail"
                });
                console.log(err);*/
            }
        }
        fetchData();
    },[])

    const handleDelete = async (id) => {
        try {
            const response = await RestaurantFinder.delete(`/${id}`);
            setRestaurants(restaurants.filter(restaurant => {
                return restaurant.id !== id
            }))
        } catch(err) {

        }
    }

  return (
    <div className='list-group'>
        <table className="table-hover table-dark">
            <thead>
                <tr className="bg-primary">
                    <th scope="col">Restaurant</th>
                    <th scope="col">Location</th>
                    <th scope="col">Price Range</th>
                    <th scope="col">Ratings</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {restaurants && restaurants.map((restaurant) => {
                    return (
                    <tr key={restaurant.id}>
                        <td>{restaurant.name}</td>
                        <td>{restaurant.location}</td>
                        <td>{"$".repeat(restaurant.price_range)}</td>
                        <td>reviews</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button onClick={() => handleDelete(restaurant.id)} className="btn btn-danger">Delete</button></td>
                    </tr>);
                })}
                {/*<tr>
                    <td>mcdonalds</td>
                    <td>new jersey</td>
                    <td>$</td>
                    <td>Rating</td>
                    <td><button className="btn btn-warning">Update</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr>
                <tr>
                    <td>mcdonalds</td>
                    <td>new jersey</td>
                    <td>$</td>
                    <td>Rating</td>
                    <td><button className="btn btn-warning">Update</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr>*/}
            </tbody>
        </table>
    </div>
  )
}

export default RestaurantList