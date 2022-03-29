import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar ,Container,Nav,NavDropdown,Offcanvas} from "react-bootstrap"
import styles from "./Hamberger.module.css"
const Hamberger = () => {
    return (
        <div>
            <Navbar className={styles.nav}  bg="dark" variant="dark" expand={false}>
            <Container fluid>
               
                <Navbar.Toggle  aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas className={styles.Offcanvas}
                
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="start"
                >
                <Offcanvas.Header className={styles.closeButton}  closeButton>
                    
                </Offcanvas.Header>
                <Offcanvas.Body className={styles.closeButton}  >
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link className={styles.link}  href="#action1">صفحه اصلی</Nav.Link>
                    
                    <NavDropdown className={styles.toggle}  title="محصولات" id="offcanvasNavbarDropdown">
                    <NavDropdown className={styles.sub} title="روان کننده ها"  >
                        <NavDropdown.Item href="#action3"><Link  to="/روان-کننده-ها/سوپر-روان-کننده-ها" >سوپر روان ‌كننده BS420</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link to="/روان-کننده-ها/ابر-روان‌-کننده-BS410">ابر روان‌کننده BS410</Link></NavDropdown.Item> 
                        <NavDropdown.Item href="#action5"><Link to="/روان-کننده-ها/فوق-روان‌-کننده-BS405">فوق روان‌کننده BS405</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown  title="گروت"   >
                        <NavDropdown.Item><Link to="/گروت/گروت-b100">گروت BS100</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>گروت BS95</Link></NavDropdown.Item> 
                        <NavDropdown.Item href="#action3"><Link to="/گروت/گروت-bs110">گروت اپوکسی  BS110</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link to="/گروت/گروت-bs120">گروت کنسنترات BS120</Link></NavDropdown.Item> 
                        </NavDropdown>
                        <NavDropdown  title="ترمیم کننده ها"   >
                        <NavDropdown.Item href="#action3"><Link to="/روان-کننده-ها/فوق-روان‌-کننده-BS405">ترمیم کننده بتن BS150</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link to="/روان-کننده-ها/فوق-روان‌-کننده-BS405">ترمیم کننده ویژه BS160</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown  title="آببندها و عایق های پوششی"   >
                        <NavDropdown.Item href="#action3"><Link to="/روان-کننده-ها/فوق-روان‌-کننده-BS405">عایق ترمیم کننده (سمنتکس)</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link to="/روان-کننده-ها/فوق-روان‌-کننده-BS405">عایق پوششی (شیمی بام) 980BS</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action3"><Link>سوپر عایق پوششی(ایزوپلین) BS1000</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>قیر پلیمری (دارای پلیمر SBS)</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>آببند کاشی و سرامیک S4</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown  title="چسب ها و ماستیک ها"   >
                        <NavDropdown.Item href="#action3"><Link>چسب بتن مایع BS500</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>چسب کاشي پودری BS600</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action3"><Link>چسب کاشـی پودری ویژه BS650</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>چسب کاشی خمیری BS700</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>چسب بلوک BS160</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>چسب کاشت میلگرد BS335</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>ماستیک پلی اورتان تک جزئی BS306</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown  title="اسپیسر های بتن"   >
                        <NavDropdown.Item href="#action3"><Link>اسپیسر سبک</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>اسپيسر متوسط</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action3"><Link>اسپيسر سنگين</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>اسپيسر گرد</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>اسپيسر فلت فيكس</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>اسپیسر یوچیر</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>دوبل اسپیسر</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action3"><Link>اسپیسر سوپر استرانگ</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>اسپیسر ساید چیر</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action3"><Link>راند اسپیسر</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>اسپیسر تیرچه قالب های فلزی</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>کیچ اسپیسر</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown  title="واتر استاپ"   >
                        <NavDropdown.Item href="#action4"><Link>واتراستاپ PVC</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>واتراستاپ هیدروفیلی</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown  title="ضد یخ بتن"   >
                        <NavDropdown.Item href="#action4"><Link>ضد یخ بتن مایع BS780</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>ضدیخ ملات BS770</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown  title="الیاف بتن"   >
                        <NavDropdown.Item href="#action4"><Link>الیاف پلی پرو پیلن PP</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action3"><Link>الیاف فولادی آلیاژی</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>الیاف سنتتیک تابیده</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>الیاف سنتتیک عاج دار</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown  title="عایق های ضد حریق"   >
                        <NavDropdown.Item href="#action3"><Link>ضد حریق پایه سیمانی</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>ضد حریق پایه گچی</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>ضد حریق پایه زرینی</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown  title="اپوکسی"  >
                        <NavDropdown.Item href="#action4"><Link>کف پوش های اپوکسی</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown  title="محصولات نانو"   >
                        <NavDropdown.Item href="#action4"><Link>نانو BS</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown  title="فایبر سمنت"   >
                        <NavDropdown.Item href="#action4"><Link>فایبرسمنت ساده(نما)</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action3"><Link>فایبر سمنت طرح چوب و دکوراتیو</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>فایبر سمنت سقف کاذب</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>سیستم دیوارهای فایبر سمنت</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown  title="سایر محصولات"   >
                        <NavDropdown.Item href="#action3"><Link>ژل میکروسیلیس BS920</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>میکروسیلیکا BS900</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link>زودگیر بتن پودری BS710</Link></NavDropdown.Item>
                        </NavDropdown>
                    </NavDropdown>
                    <Nav.Link  className={styles.link} href="#action2">درباره ما</Nav.Link>
                    <Nav.Link  className={styles.link} href="#action2">تماس با ما</Nav.Link>
                    <Nav.Link className={styles.link}  href="#action2">پروزه ها</Nav.Link>
                    </Nav>
                
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        </div>
    );
};

export default Hamberger;