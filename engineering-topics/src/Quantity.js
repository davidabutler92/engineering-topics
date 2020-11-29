import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Quantity Trumps Quality</h1>
                <p>
                    
                </p>
                <Link to='/'>Home page</Link>
            </div>
        )
    }
}
