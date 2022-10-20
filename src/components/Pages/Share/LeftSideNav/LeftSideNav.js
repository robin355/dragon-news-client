import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [cetagories, setCetagories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/news-categories')
            .then(res => res.json())
            .then(data => setCetagories(data))

    }, [])

    return (
        <div className=' d-lg-block'>
            <h2>All Cetagories</h2>
            {
                cetagories.map(cetagory => <p key={cetagory.id}>
                    <Link to={`/cetagory/${cetagory.id}`}>{cetagory.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;