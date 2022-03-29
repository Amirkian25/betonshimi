import React from 'react';
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';
import Logo from "./icons/logo.png";
import Hamberger from "./Hamberger"
// import { Container } from 'react-bootstrap';
import Dropdown from './Dropdown';
import {Data} from "./Data";
import SearchBar from './SearchBar';
import "hover.css/css/hover-min.css";




const Navbar = () => {
    return (
        <>
        {/* <Container fluid="md"> */}
        <div className={styles.continer}>
        <div className={styles.header}>
            
            <div className={styles.headerRight}>
                <div>
                    <img src={Logo} alt="logo" />
                </div>
                <div className={styles.Search} > <SearchBar Data={Data} /></div>
            </div>
            <div className={styles.headerLeft}>
                <button className={styles.button}>ورود</button>
                <svg className={styles.svgicon} viewBox="0 0 20 20">
 							<path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
 						</svg>
                
            </div>
            <div className={styles.hambergerMenu}>
                <Hamberger />
            </div>
        </div>
        <div  className={styles.nav}>
            <ul className={styles.nav2} >
                <li><Link to="/">صفحه اصلی</Link></li>
                <span className={styles.nav3} 
                  >  
               <div>
                <Dropdown/>
               
               </div>
                
                </span>
                
                <li><Link to="/aboutus" >درباره ما</Link></li>
                <li><Link to="/contactus">تماس با ما</Link></li>
                <li><Link to="/Project">پروژه ها</Link></li>
            </ul>
            <div className={styles.input} >
            <div className={styles.serchBox} > <SearchBar Data={Data} /></div>
            </div>
            
            {/* <div className={styles.input}>
                <div className={styles.serchBox}>
                <svg class="svg-icon" viewBox="0 0 20 20">
							<path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
						</svg>
                <input type="text" placeholder='محصول مورد نظر خود را جستجو کنید' />
                </div>
               
            </div> */}
            
        </div>
        </div>
        {/* </Container> */}
        </>
    );
};

export default Navbar;
