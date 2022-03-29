import React from 'react';
import styles from "./Footer.module.css";
import wh from "../image/whatsapp.png";
import i from "../image/instagram.png";
import te from "../image/telegram.png";
import logo from "./icons/logo.png";
import {Link } from "react-router-dom"
// import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            {/* <Container fluid="md">  */}
            <div className={styles.ever}>
            <div className={styles.continer}>
                <div className={styles.list}>
                    <ul>
                        <li><span>  آدرس:</span></li>
                        <li>مشهد بلوار ابوطالب بین ابوطالب 8و10</li>
                    </ul>
                </div>
                <div className={styles.list}>
                    <ul>
                        <li><span>محصولات</span></li>
                        <li>روان کننده ها</li>
                        <li>اسپیسر بتن</li>
                        <li>گروت</li>
                        <li>چادر</li>
                    </ul>
                </div>
                <div className={styles.list}>
                    <ul>
                        <li><span>راه های ارتباطی</span></li>
                        <li>تلفن همراه 
                            <br />
                            خسروپرست 09151073067
                            <br />
                            شادفر 09151142245
                        </li>
                    </ul>
                </div>
                <div className={styles.logo}>
                   <Link to="/"><img src={logo} alt="logo" /></Link> 

                </div>
                
                   
            </div>
           
            </div>
            <div className={styles.UnderFooter}>
            <div>
            
            <p>تمامی حقوق این سایت محفوظ می باشد.</p>
            </div>
                <ul className={styles.listEnd}>
                        
                       <ul> 
                        <li><a target="_blank" href="https://wa.me/+989151073067"><img  src={wh} alt='wh'/></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/betonshimi-bs/" ><img  src={i} alt='in'/></a></li>
                        <li><a target="_blank" href="https://t.me/betonshimi-bs" ><img  src={te} alt='te'/></a></li>
                        </ul>   
                </ul>
                
               
            </div>
            {/* </Container> */}
            
        </div>
    );
};

export default Footer;


