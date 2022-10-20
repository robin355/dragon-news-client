import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardSummary from '../Share/CardSummary/CardSummary';

const Home = () => {
    const Allnews = useLoaderData()
    return (
        <div>
            <h3>Dragon News Home: {Allnews.length}</h3>
            {
                Allnews.map(news => <CardSummary key={news._id} news={news}></CardSummary>)
            }
        </div>
    );
};

export default Home;