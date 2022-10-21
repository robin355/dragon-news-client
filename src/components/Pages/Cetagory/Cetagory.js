import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardSummary from '../Share/CardSummary/CardSummary';

const Cetagory = () => {
    const cetagoriNews = useLoaderData()

    return (
        <div>
            <h2>Cetagory all data:{cetagoriNews.length}</h2>
            {
                cetagoriNews.map(news => <CardSummary key={news._id} news={news}></CardSummary>)
            }
        </div>
    );
};

export default Cetagory;