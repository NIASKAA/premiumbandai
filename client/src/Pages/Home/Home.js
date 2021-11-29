import React, {useState} from 'react'
import {Carousel, Container} from 'react-bootstrap'
import images from './images'
import './styles.css'

const Home = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
  
    return (
        <>
            <Container>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {images.map(({id, image, caption, description}) => {
                    return (
                        <Carousel.Item interval={1500}>
                            <img key={id} src={image} alt={description} className="homeImages"/>
                            <Carousel.Caption>
                                <h3>{caption}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                    })}
                </Carousel>
            </Container>
        </>
    )
}

export default Home
