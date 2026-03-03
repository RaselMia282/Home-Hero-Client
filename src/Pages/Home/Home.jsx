import React from 'react';
import Hero from '../Hero';
import TopServices from '../../Components/TopServices/TopServices';
import { useLoaderData } from 'react-router';


const Home = () => {
    const data = useLoaderData();
    console.log(data);
    
    return (
        <div>
            <Hero></Hero>
        <TopServices data={data}></TopServices>

        </div>
    );
};

export default Home;
