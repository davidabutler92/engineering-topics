import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './App.css';

export default class HomePage extends Component {
    render() {
        return (
            <div className='home-page'>
                <h1>Home Page: Engineering Topics</h1>
                <ul>
                    <Link to='/quantity'><li>Quantity Always Trumps Quality</li></Link>
                    <Link to='/cleanCode'><li>Clean Code: Chapter 1</li></Link>
                    <Link to='/refactor'><li>TDD red-green-refactor</li></Link>
                    <Link to='/TDD'><li>Cycles of TDD</li></Link>
                </ul>
            </div>
        )
    }
}
