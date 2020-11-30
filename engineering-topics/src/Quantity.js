import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Quantity Trumps Quality</h1>
                <p className='italics'>
                "The ceramics teacher announced on opening day that he was dividing the class into two groups. 
                All those on the left side of the studio, he said, would be graded solely on the quantity of work they produced, all those on the right solely on its quality. 
                His procedure was simple: on the final day of class he would bring in his bathroom scales and weigh the work of the "quantity" group: fifty pound of pots rated an "A", forty pounds a "B", and so on. 
                Those being graded on "quality", however, needed to produce only one pot - albeit a perfect one - to get an "A".
                Well, came grading time and a curious fact emerged: the works of highest quality were all produced by the group being graded for quantity. 
                It seems that while the "quantity" group was busily churning out piles of work - and learning from their mistakes - the "quality" group had sat theorizing about perfection, and in the end had little more to show for their efforts than grandiose theories and a pile of dead clay." -Art and Fear by David Bayles, Ted Oraland.
                </p>
                <p>The team that was tasked with creating more pots, the 'quanitity' group, produced a better quality pot than the 'quality' team because instead of hyper focusing on a single product they had the chance to learn from thier mistakes. 
                    Producing a the first pot probably had a lotof defects and simply wasn't good enough. As they went on to build the 2nd, 3rd, 30th pot, they stated to make better quality pots. 
                    Like with coding, it is better to produce more projects, make more mistakes and learn from them.
                    This to me personally is a great way to grow.
                </p>
                <Link to='/'>Home page</Link>
            </div>
        )
    }
}
