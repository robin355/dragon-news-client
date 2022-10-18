import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button'
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch, } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCoursel from '../BrandCoursel/BrandCoursel';
const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-success"><FaGoogle></FaGoogle> GoogleSign</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> GitHubSign</Button>
            </ButtonGroup>

            <div>
                <h3>Find Us on</h3>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> FaceBook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twiter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCoursel></BrandCoursel>
            </div>

        </div>
    );
};

export default RightSideNav;