import React from 'react';
import styles from "./Carouselshow.module.css";
import {Carousel} from "react-bootstrap";
import screens1 from "../image/Screenshot1.jpg"
import screens2 from "../image/Screenshot2.jpg"
import screens3 from "../image/Screenshot3.jpg"

const Carouselshow = () => {
    return (
        <div className={styles.CarouselContiner}>
            <Carousel className={styles.Carousel}>
            <Carousel.Item className={styles.image}>
                <img
                className="d-block w-100"
                src={screens1}
                alt="First slide"
                />
               
            </Carousel.Item>
            <Carousel.Item className={styles.image}>
                <img
                className="d-block w-100"
                src={screens2}
                alt="Second slide"
                />

               
            </Carousel.Item>
            <Carousel.Item className={styles.image}>
                <img
                className="d-block w-100"
                src={screens3}
                alt="Third slide"
                />

                
            </Carousel.Item>
            </Carousel>
            
        </div>
    );
};

export default Carouselshow;