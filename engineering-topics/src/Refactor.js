import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import refactorImg from './download.jpg'
import './App.css';

export default class Refactor extends Component {
    render() {
        return (
            <div>
                <h1>TDD red-green-refactor</h1>
                <div>
                    <p className='italics'>"Test-driven development (TDD) is an approach to software development where you write tests first, 
                        then use those tests to drive the design and development of your software application."</p>
                    <p>Test driven development is a great way varifyling that your functions are working properly.
                    </p>
                    <div>
                        <span className='red'>Red</span>: Think about what you want to develope.
                    </div>
                    <div>
                        <span className='green'>Green</span>: Think about how to make your tests.
                    </div>
                    <div>
                        <span className='lightblue'>Refactor</span>: Think about how to improve the already exisiting implementation.
                    </div>
                    <img 
                    className='refactorImage'
                    src={refactorImg} alt='refactor'/>           
                </div>
                <Link className='link' to='/'>Home page</Link>
            </div>
        )
    }
}
