import React from 'react';
import  Cards  from './Cards';
import Carouselshow from "./Carouselshow"
import { Container } from 'react-bootstrap';
import styles from "./Homepage.module.css";
import Banner from './Banner';

const Homepage = () => {
    return (
        <>
            <Banner/>
            <Container fluid="md">

            {/* <Carouselshow /> */}
            <Cards />
            </Container>
            
        </>
    );
};

export default Homepage;