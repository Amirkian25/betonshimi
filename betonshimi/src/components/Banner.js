import React from 'react';
import banner from "../image/Banner.jpg";
import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt="banner" />
        </div>
    );
};

export default Banner;