import React, {useState} from 'react'
import {Carousel, Container} from 'react-bootstrap'
import images from './images'
import './styles.css'

const Home = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
  
    return (
        <>
            <Container>
                <h3>Premium-Bandai Gunpla Finder</h3>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {images.map((id, image, caption, description) => {
                    return (
                        <Carousel.Item>
                            <img key={id} src={image} alt={description} className="d-block w-100 h-60" />
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
