const HousesEndpoint = 'https://ancient-taiga-31359.herokuapp.com/api/houses'; //This constant holds the URL of the API endpoint for houses.

class HousesApi { //Just a normal class.
    get = async () => { //Sends a GET request to the HOUSES_ENDPOINT.
        try {
            const response = await fetch(HousesEndpoint); //Uses fetch() to make HTTP request.
            const responseJson = await response.json(); //Converts the response to JSON using response.json().
            return responseJson;
        } catch(e) { //Any errors occurring during the process are caught, error message logged to console.
            console.log('FetchHouses had an error.', e);
        }
    }

    put = async (house) => { //Method updates a house by sending a PUT request to API with updated house object.
        try {
                const response = await fetch(`${HousesEndpoint}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await response.json();
        } catch(e) {
            console.log('Updating houses had an error.', e);
        }
    }
}

export const housesApi = new HousesApi();