import React from 'react';
import { BiLeftArrow } from 'react-icons/bi';
import { Link } from 'react-router';

const NewsDetails = ({news}) => {
    return (
        <div className='primary space-y-5'>
            <h1 className='primary font-bold'>Dragon News</h1>
            <div className="space-y-5">
            <img className='w-full px-10' src={news.image_url} alt="" />
            <h1 className='font-bold text-3xl'>{news.title}</h1>
            <p className='text-gray-700'>{news.details}</p>
            <Link className='btn btn-secondary' to={'/'}><BiLeftArrow></BiLeftArrow>All News In This Category</Link>
            </div>
        </div>
    );
};

export default NewsDetails;