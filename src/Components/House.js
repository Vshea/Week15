import React from 'react';
import { NewRoomForm } from './NewRoomForm';

const House = ({ house, updateHouse }) => {

    const handleDeleteRoom = (roomId) => { 
        const updatedRooms = house.rooms.filter(room => room._id !== roomId);
        const updatedHouse = { ...house, rooms: updatedRooms };
        updateHouse(updatedHouse);
    };

    const handleAddNewRoom = (newRoom) => {
        const updatedRooms = [...house.rooms, newRoom];
        const updatedHouse = { ...house, rooms: updatedRooms };
        updateHouse(updatedHouse);
    };

    const renderRooms = () => (
        <ul>
            {house.rooms.map(room => (
                <li key={room._id}>
                    <label>{`${room.name} Area: ${room.area}`}</label>
                    <button onClick={() => handleDeleteRoom(room._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            <h1>{house.name}</h1>
            {renderRooms()}
            <NewRoomForm addNewRoom={handleAddNewRoom} />
        </div>
    );
};

export default House;