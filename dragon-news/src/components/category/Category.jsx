import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch('/categories.json')
                        .then(res => res.json())
                        console.log(categoryPromise);
                        
const Category = () => {
    const categories = use(categoryPromise)
    return (
        <div>
            <h1 className='font-bold primary'>All Categories ({categories.length})</h1>
            <div className="grid grid-col-1 gap-3 mt-3">
                {categories.map((category) => 
                    (<NavLink to={`/category/${category.id}`} className={'btn bg-base-100 hover:bg-base-200 border-none font-semibold text-accent primary'} key={category.id}>{category.name}</NavLink>))}
            </div>
        </div>
    );
};

export default Category;