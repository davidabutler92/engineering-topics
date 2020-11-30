import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './App.css';

export default class HomePage extends Component {
    render() {
        return (
            <div className='home-page'>
                <h1>Home Page: Engineering Topics</h1>
                <p>The links below talk about engineering topics each of which are a blog post describing what the topic is about. </p>
                <ul>
                    <Link 
                    className='link'
                    to='/quantity'><li>Quantity Always Trumps Quality</li></Link>
                    <Link 
                        className='link'
                        to='/cleanCode'><li>Clean Code: Chapter 1</li></Link>
                    <Link 
                        className='link'
                        to='/refactor'><li>TDD red-green-refactor/Cycles of TDD</li></Link>
                </ul>
            </div>
        )
    }
}
