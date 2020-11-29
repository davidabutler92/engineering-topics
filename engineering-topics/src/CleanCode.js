import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class CleanCode extends Component {
    render() {
        return (
            <div>
                <h1>Clean Code chapter-1</h1>
                <Link to='/'>Home page</Link>
            </div>
        )
    }
}
