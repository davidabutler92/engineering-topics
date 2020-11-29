import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Refactor extends Component {
    render() {
        return (
            <div>
                <h1>TDD red-green-refactor</h1>
                <Link to='/'>Home page</Link>
            </div>
        )
    }
}
