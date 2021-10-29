import React from 'react'
import {Container} from 'react-bootstrap'
import './styles.css'

const FAQ = () => {
    return (
        <>
            <Container>
                <h3 className="titleFAQ">
                    What are Premium-Bandai's Gunpla?
                </h3>

                <p className="text">
                    Premium-Bandai's Gunpla are exclusive Gunplas that can only be ordered online through the 
                    official Premium-Bandai website that is dedicated for your region.
                </p>

                <br/>

                <h3 className="titleFAQ">
                    What does this website do?
                </h3>
                <p className="text">
                    This website was made solely for anyone to keep track of their inventory of Premium-Bandai. As a
                    Gunpla Collector myself, I find it harder to check for specific exclusives so I made this for everyone
                    to use. You can save the Gunpla you already owned or you can put it in your wishlist. Mobile App version
                    coming soon!
                </p>

                <br/>

                <h3 className="titleFAQ">
                    About Gundam Expos and Gundam Base Limited...
                </h3>
                <p className="text">
                    You might wonder why those aren't included in the list. Well, those aren't Premium-Bandai's exclusives.
                    The problem is that those kind of exclusives are only available when you buy in store. (Not including secondhand)
                    There are a few exceptions to the few Gunpla's that were made available to Premium-Bandai, those are included.
                </p>

                <br/>

                <h3 className="titleFAQ">
                    Will I consider adding Gundam Expos and Gundam Base Limited?
                </h3>
                <p className="text">
                    Most likely not. 
                </p>

                <br/>

                <h3 className="titleFAQ">
                    Hey, you missed a few Gunplas in your website! 
                </h3>
                <p className="text">
                    Sorry in advance if I do ever miss a few Gunplas. Please do email me about it and I will surely add it.
                </p>
            
                <br/>

                <h3 className="titleFAQ">
                    Is there a mobile version?
                </h3>
                <p className="text">
                    There is a IOS version currently being developed but it's close to being launch. As for android, it is in the process.
                </p>

                <h3 className="titleFAQ">
                    How can I support?
                </h3>
                <p className="text">
                    At the moment, the servers are running out of my own pocket so if you want to help it alive, you are welcome to donate to my 
                    paypal. Everything counts! Thank in advance! 
                </p>
                <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="business" value="SL4EJ7EZZWHV4" />
                <input type="hidden" name="no_recurring" value="1" />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </Container>
        </>
    )
}

export default FAQ
