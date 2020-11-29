import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class TDD extends Component {
    render() {
        return (
            <div>
                <h1>Cycles of TDD</h1>
                <Link to='/'>Home page</Link>
            </div>
        )
    }
}
