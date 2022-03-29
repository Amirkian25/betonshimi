import React from 'react';
import pro from "../image/project2.png";
import { Container } from 'react-bootstrap';
import styles from "./Project.module.css";

const Project = () => {
    return (
        <div className={styles.main}>
            <Container fluid="md">
           
            <div className={styles.contact}>
               
                <div className={styles.contactcenter}>
                    <div>
                    <span>پروژه ها</span>
                    <ul>
                    
                        
                        <li>مخزن ترن واش ایستگاه راه آهن مشهد</li>
                        <li>اجرای پلی ارتان درز انبساطی ورودی راه آهن</li>
                        <li>مخزن ایستگاه راه آهن نقاب اسفراین</li>
                        <li>مخزن شرکت سیرنگ</li>
                        <li>مخازن شرکت احیانان ۹۵۹۵</li>
                        <li>تصفیه خانه شماره 1 مشهد</li>
                        <li>تصفیه خانه شماره 2 مشهد</li>
                        <li>تصفیه خانه شماره 3 مشهد</li>
                        <li> استخر و مخازن نگهداری آب مهمانسرای سنگان خواف</li>
                    </ul>
                    </div>
                   
                    <div className={styles.img}>
                    <img src={pro} alt="Aboutus" />
                    </div>
                      
                </div>
            </div>
            </Container>
        </div>
    );
};

export default Project;