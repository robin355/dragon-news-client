import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cetagory = () => {
    const cetagoriNews = useLoaderData()

    return (
        <div>
            <h2>Cetagory all data:{cetagoriNews.length}</h2>
            {
                cetagoriNews.map()
            }
        </div>
    );
};

export default Cetagory;