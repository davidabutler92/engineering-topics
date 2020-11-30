import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import image from './cleancode-3.png';

export default class CleanCode extends Component {
    render() {
        return (
            <div className='clean-code-div'>
                <h1>Clean Code chapter-1</h1>
                <div className='cleanCode-quote'>
                    <p className='italics'>"They had rushed the product to
                    market and had made a huge mess in the code. As they added more and more features, the
                    code got worse and worse until they simply could not manage it any longer. 
                    It was the bad code that brought the company down."</p>
                    <p>This is a good example of bad code. Wanting new features is great and all but you need to have a gmae plan at tackling the code, managing the code, and then producing more.
                        Having clear consice code and all around readable code makes it easier to pass the project down to others.
                    </p>
                </div>
                <div>
                    <p className='italics'>"I like my code to be elegant and efficient. The
                    logic should be straightforward to make it hard
                    for bugs to hide, the dependencies minimal to
                    ease maintenance, error handling complete
                    according to an articulated strategy, and performance close to optimal so as not to tempt
                    people to make the code messy with unprincipled optimizations. Clean code does one thing
                    well."
                    </p>
                    <p>This is a great quote by the author of c++ Programming Language, Bjarne Stroustrup. 
                        Elegant and pleasing are great words to use when talking about writing good code. 
                        It really can be an art and it does take a lot of practice BUT in the long run it saves time for whoever works on your code.</p>
                </div>
                <img src={image} alt='clean vs bad code'/>Clean VS bad code
                <Link to='/'>Home page</Link>
            </div>
        )
    }
}
