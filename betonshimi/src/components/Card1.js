import React from 'react';
import { Card } from 'react-bootstrap';
import styles from "./Card1.module.css";
import "hover.css/css/hover-min.css";
import {Link} from "react-router-dom"

const Card1 = (props) => {
    return (
        <div className={styles.continer}>
            
            <Card class="hvr-grow" className={styles.card}>
                <div className={styles.cardImg} >
                    <Card.Img variant="top" src={props.image} className={styles.img} />
                </div>
               
                    <Card.Body className={styles.body}>
                        <Card.Title   ><Link to ={props.path}>{props.titel}</Link></Card.Title>
                            <Card.Text>   
                               {props.Description}
                            </Card.Text>
                
                    </Card.Body>
            </Card>
        </div>
    );
};

export default Card1;