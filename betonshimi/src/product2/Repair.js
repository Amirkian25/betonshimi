import React from 'react';
import { Repairs } from './datarapair';
import { Container,Table } from 'react-bootstrap';

import styles from "../components/Product1/Product1.module.css";
import Application from "./Application"

const Repair = (props) => {
    const id = props.match.params.id;
    const product = Repairs[id - 1]
    const {Description,Titelb100,Descriptionb100,Imgb100,benefits,benefitsb1001,benefitsb1002,benefitsb1003,benefitsb1004,titelApplication,Applications,titelConsumptiongroutb100,Consumptiongroutb100,titelConsumptionb100,Consumptionb100}=product
    return (
        <>
        <Container fluid="md">
            
                
                    <main className={styles.main}>
                    <article>
                        <div>
                            <div className={styles.top}>
                                <div className={styles.right}>
                                <h2>{Titelb100}</h2>
                                <p>{Descriptionb100}</p>
                                </div>
                                <div className={styles.left}>
                                <img src={Imgb100} alt="groutb100" />
                                </div>
                            </div>
                            <div className={styles.center1}>
                            <h3>{Description}</h3>
                            <div className={styles.center}>
                            <div className={styles.right} >
                            <p>{benefits}</p>
                            <ul>
                                <li>{benefitsb1001}</li>
                                <li>{benefitsb1002}</li>
                                <li>{benefitsb1003}</li>
                                <li>{benefitsb1004}</li>
                                <li>{product.benefitsb1005}</li>
                                <li>{product.benefitsb1006}</li>
                                <li>{product.benefitsb1007}</li>
                                <li>{product.benefitsb1008}</li>
                                
                                </ul>
                            </div>
                                <div className={styles.leftCenter}>
                                    <ul>
                                    <p>{titelApplication}</p>
                                    <Application item={Applications} />
                                    </ul>
                                </div>
                            </div>     
                            </div>
                            <div className={styles.center1}>
                                <h3>{titelConsumptiongroutb100}</h3>
                            
                                <div className={styles.center}>
                                <div className={styles.right}>
                                    <p>{Consumptiongroutb100}</p>
                                    <p>{titelConsumptionb100}</p>
                                    <p>{Consumptionb100}</p>
                                    <p>{product.Consumptiongroutb101}</p> 
                                </div>
                                {/* <div className={styles.table}>
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
                                </div> */}
                                </div>
                            </div> 
                        </div>
                    </article>
                </main>

                
            
           
        </Container> 
        </>
    );
};

export default Repair;