import Layout from '../components/Layout';
import '../static/css/styles.css'
import React from 'react';
import { SocialIcon } from 'react-social-icons';
var QRCode = require('qrcode.react');


const Index = () => {
    return (
        <Layout>
            <div id="page-container">
                <div id="content-wrap">
                    <img className="index-logo" src='/aeindex.png' />
                    <div className="form">
                        <div className="form-wrapper">
                            Scan the QR to Donate
                            <div className="text">
                                <QRCode value="http://facebook.github.io/react/" />
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div >
                            <div id="footer-text">
                                Visit Us:
                            </div>
                            <SocialIcon url="https://www.youtube.com/almost-everything" fgColor="white" bgColor="black" className="icon"/>
                            <SocialIcon url="https://www.instagram.com/_almost.everything/?hl=en" fgColor="white" bgColor="black" className="icon"/>
                            <SocialIcon url="https://www.facebook.com/pages/category/Education-Website/Almost-Everything-356325994970583/" bgColor="black" fgColor="white" className="icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Index;

