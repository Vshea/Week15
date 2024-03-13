import React from 'react';
import House from './House'; // Import House as default export
import { housesApi } from '../rest/HousesAPI.js';

class HousesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { // State holds list of houses fetched from API
            housesList: []
        };
    }

    componentDidMount() { // Called after component is mounted.
        this.fetchHousesFromApi(); //Fetches list of houses from API
    }

    async fetchHousesFromApi() { // Asynchronous, fetches houses from API
        try {
            const fetchedHouses = await housesApi.get();
            this.setState({ housesList: fetchedHouses });
        } catch (error) {
            console.error('There was an error fetching houses', error);
        }
    }

    async updateHouse(updatedHouse) { //Asynchronous, updates house
        try {
            await housesApi.put(updatedHouse);
            this.fetchHousesFromApi(); //Fetches houses from API, with updated changes
        } catch (error) {
            console.error('There was an error updating houses', error);
        }
    }

    render() {
        const { housesList } = this.state;

        return (
            <div className="houses-list">
                {housesList.map((house) => (
                    <House 
                        key={house._id}  // Unique identifier
                        house={house}    // Passes data to House component
                        updateHouse={(updatedHouse) => this.updateHouse(updatedHouse)} // Passes update function as a prop
                    />
                ))}
            </div>
        );
    }
}

export { HousesList };