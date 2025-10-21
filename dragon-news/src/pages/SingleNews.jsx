import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import RightAside from '../components/homelayout/RightAside';
import NewsDetails from '../components/NewsDetail/NewsDetails';
import { useLoaderData, useParams } from 'react-router';

const SingleNews = () => {
    
    const data = useLoaderData();
    const {id} = useParams()
    
    const [news, setNews] = useState([])
    useEffect(() => {
        const newsData = data.find((singleData) => singleData.id == id)
        setNews(newsData)
    },[data, id])
    console.log(news);
    
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto mt-5 grid grid-cols-12 gap-10'>
                <section className='col-span-9'>
                    <NewsDetails news={news}></NewsDetails>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default SingleNews;