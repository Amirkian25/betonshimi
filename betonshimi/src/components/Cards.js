import React from 'react';
import Card1 from './Card1';
import styles from "./Cards.module.css";
import { dataCard } from './DataCard';
import { dataCard2 } from './DataCard';

const Cards = () => {
    return (
        < >
        
            <div className={styles.Container}>
            
                {dataCard.map((item , key) => {
                    return(
                        <Card1 image={item.img1} path={item.path} titel={item.titel1} Description={item.parageraf1} />
                    )
                })}
           
           
            

            </div>
            <div className={styles.Container}>
            {dataCard2.map((item , key) => {
                    return(
                        <Card1 image={item.img2} path={item.path}  titel={item.titel2} Description={item.parageraf2} />
                    )
                })}
            

            </div>
           
            
        </>
    );
};

export default Cards;