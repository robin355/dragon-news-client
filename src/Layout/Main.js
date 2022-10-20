import React from 'react';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Pages/Share/Footer';
import Header from '../components/Pages/Share/Header/Header';
import LeftSideNav from '../components/Pages/Share/LeftSideNav/LeftSideNav';
import RightSideNav from '../components/Pages/Share/RightSideNav/RightSideNav';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='3' className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>

                    </Col>
                    <Col lg='7'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='2' >
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;