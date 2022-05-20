import React, { Component } from 'react'
import UserBlock from './userBlock'

export class Users extends Component {
    state = {
        json: []
    }


    //fetch json data from jsonplaceholder api
    jsonFetch = () => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(json => this.setState({json}));
}
    componentDidMount() {
        this.jsonFetch()
    }

    render() {
        return (
            <div>users
                < UserBlock json = {this.state.json}/>
            </div>
        )
    }
}

export default Users