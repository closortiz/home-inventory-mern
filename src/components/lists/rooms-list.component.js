import React, { Component } from 'react';
import axios from 'axios';

import Room from '../objects/room.component';

export default class RoomsList extends Component {
    constructor(props) {
        super(props);

        this.listRooms = this.listRooms.bind(this);

        this.state = {
            rooms: [],
        }

    }

    componentDidMount() {
        axios.get('http://localhost:5000/room/')
            .then(response => {
                this.setState({ rooms: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    listRooms() {
        return this.state.rooms.map(currentRoom => {
            return <Room room={currentRoom} />//deleteExcercise={this.deleteExcercise} key={currentexercise._id}
        })
    }

    render() {
        return (
            <div>
                <h1>Rooms</h1>
                <div className="row">{this.listRooms()}</div>
            </div>

        )
    }
}