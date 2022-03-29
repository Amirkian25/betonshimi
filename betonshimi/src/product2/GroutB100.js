import React from 'react';
import { Container,Table } from 'react-bootstrap';
import { productGerot } from './data';
import styles from "../components/Product1/Product1.module.css";
import Application from "./Application"

const GroutB100 = () => {
    return (
        <>
        <Container fluid="md">
            {productGerot.map((item) => {
                return(
                    <main className={styles.main}>
                    <article>
                        <div>
                            <div className={styles.top}>
                                <div className={styles.right}>
                                <h2>{item.Titelb100}</h2>
                                <p>{item.Descriptionb100}</p>
                                </div>
                                <div className={styles.left}>
                                <img src={item.Imgb100} alt="groutb100" />
                                </div>
                            </div>
                            <div className={styles.center1}>
                            <h3>چرا باید از گروت BS100استفاده کنیم؟</h3>
                            <div className={styles.center}>
                            <div className={styles.right} >
                            <p>{item.benefits}</p>
                            <ul>
                                <li>{item.benefitsb1001}</li>
                                <li>{item.benefitsb1002}</li>
                                <li>{item.benefitsb1003}</li>
                                <li>{item.benefitsb1004}</li>
                                <li>{item.benefitsb1005}</li>
                                </ul>
                            </div>
                                <div className={styles.leftCenter}>
                                    <ul>
                                    <p>{item.titelApplication}</p>
                                    <Application item={item.Application} />
                                    </ul>
                                </div>
                            </div>     
                            </div>
                            <div className={styles.center1}>
                                <h3>{item.titelConsumptiongroutb100}</h3>
                            
                                <div className={styles.center}>
                                <div className={styles.right}>
                                    <p>{item.Consumptiongroutb100}</p>
                                    <p>{item.titelConsumptionb100}</p>
                                    <p>{item.Consumptionb100}</p> 
                                </div>
                                <div className={styles.table}>
                                <p>مشخصات فیزیکی گروت BS100:</p>
                                <Table striped bordered hover>

                                    <tbody>
                                    <tr>
                                        
                                        <td>رنگ</td>
                                        <td>خاکستری</td>
                                        
                                        </tr>
                                        <tr>
                                        
                                        <td>حالت فیزیکی</td>
                                        <td>پودري</td>
                                        
                                        </tr> <tr>
                                        
                                        <td>وزن مخصوص</td>
                                        <td>۱/۸GR/CM<sup>3</sup></td>
                                        
                                        </tr>
                                        <tr>
                                        
                                        <td>يون كلر</td>
                                        <td>ندارد</td>
                                        
                                        </tr>
                                        <tr>
                                        
                                        <td>شرايط نگه‌داري</td>
                                        <td>در محل های خشک و سرپوشیده و در بسته بندی اولیه</td>
                                        
                                        </tr>
                                        <tr>
                                        
                                        <td>بسته بندي</td>
                                        <td>كيسه‌هاي ۲۵ كيلوگرمي</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                </div>
                                </div>
                            </div> 
                        </div>
                    </article>
                </main>

                )
            } )}
           
        </Container> 
        </>
    );
};

export default GroutB100;