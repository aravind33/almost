import Layout from '../components/Layout';
import '../static/css/styles.css'
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Button } from 'reactstrap';
var QRCode = require('qrcode.react');
import PaymentIcon from 'react-payment-icons';
import './aboutus/index';
import { Container, Row, Col } from 'react-grid-system';


const Index = () => {
    return (
        <Layout>
            <div id="page-container">
                <div id="content-wrap">
                    <img className="index-logo" src='/aeindex.png' />
                    <div className="form">
                        <div className="form-wrapper">
                           <div style={{fontWeight:"bolder", fontSize:"18px", marginTop:".2vh"}}> Scan the QR or Click Button to Donate </div>
                            <div className="text">
                                <QRCode value="https://www.instamojo.com/@almosteverything/" /> 
                            </div>
                            <div style={{paddingTop:"5vh"}}>
                                <Button 
                                    style={{fontWeight:"bolder"}} 
                                    href="https://www.instamojo.com/@almosteverything/">
                                    Donate us!
                                </Button>
                                <div>
                                    <img className="payment" src='/payment.png' style={{marginTop:"2vh"}} />
                                    <PaymentIcon id="visa" style={{ margin: 10, width: 40 }}/> 
                                    <PaymentIcon id="mastercard" style={{ margin: 10, width: 40 }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div >                        
                        <Container>
                            <Row>
                                <Col md={10}>
                                    <div className="footer-text">
                                         AlmostEverything:
                                    </div>
                                    <SocialIcon url="https://www.youtube.com/almost-everything" fgColor="white" bgColor="black" className="icon"/>
                                    <SocialIcon url="https://www.instagram.com/_almost.everything/?hl=en" fgColor="white" bgColor="black" className="icon"/>
                                    <SocialIcon url="https://www.facebook.com/pages/category/Education-Website/Almost-Everything-356325994970583/" bgColor="black" fgColor="white" className="icon"/>
                                    <a href="mailto:queries.almosteverything@gmail.com"><SocialIcon network="mailto" fgColor="white" bgColor="black" className="icon"/></a>
                                </Col>
                                <Col md= {2}>
                                    <div className="footer-dev" >
                                        <a href = "./aboutus">Developed By: </a>          
                                    </div>
                                    <div className="footerwaulto" >
                                        <center><a href = "./aboutus"><img src="/waulto.jpg" alt="W A U L T O" width="100" height="40" /></a></center>
                                    </div>
                                </Col>
                            </Row>
                        </Container>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Index;

