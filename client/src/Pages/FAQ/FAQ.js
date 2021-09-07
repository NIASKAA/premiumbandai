import React from 'react'
import {Container} from 'react-bootstrap'
import './styles.css'

const FAQ = () => {
    return (
        <>
            <Container>
                <h3 className="title">
                    What are Premium-Bandai's Gunpla?
                </h3>
                <p className="text">
                    Premium-Bandai's Gunpla are exclusive Gunplas that can only be ordered online through the 
                    official Premium-Bandai website that is dedicated for your region.
                </p>

                <br/>

                <h3 className="title">
                    What does this website do?
                </h3>
                <p className="text">
                    This website was made solely for anyone to keep track of their inventory of Premium-Bandai. As a
                    Gunpla Collector myself, I find it harder to check for specific exclusives so I made this for everyone
                    to use. You can save the Gunpla you already owned or you can put it in your wishlist. Mobile App version
                    coming soon!
                </p>

                <br/>

                <h3 className="title">
                    About Gundam Expos and Gundam Base Limiteds...
                </h3>
                <p className="text">
                    You might wonder why those aren't included in the list. Well, those aren't Premium-Bandai's exclusives.
                    The problem is that those kind of exclusives are only available when you buy in store. (Not including secondhand)
                    There are a few exceptions to the few Gunpla's that were made available to Premium-Bandai, those are included.
                </p>

                <br/>

                <h3 className="title">
                    Will I consider adding Gundam Expos and Gundam Base Limited?
                </h3>
                <p className="text">
                    Most likely not. 
                </p>

                <br/>

                <h3 className="title">
                    Hey, you missed a few Gunplas in your website! 
                </h3>
                <p className="text">
                    Sorry in advance if I do ever miss a few Gunplas. Please do email me about it and I will surely add it.
                </p>
                
            </Container>
        </>
    )
}

export default FAQ
