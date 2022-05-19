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
            .then(json => this.setState({json}))
}
    jsonToUserBlock = this.state.json.map((item, index)=>{
        return (
            console.log(this.state.json.length, index)
        )
    })

    componentDidMount() {
        this.jsonFetch()
    }

    render() {
        return (
            <div>users
                < UserBlock />
            </div>
        )
    }
}

export default Users