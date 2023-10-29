import React from 'react';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
        const ProductCard = ({Product}) => {
    return (
        <div className="card lg:w-96 bg-amber-100 shadow-xl w-full">
        <figure className="px-10 pt-10">
            <img src={Product.image} alt="service"/>
            
        </figure>
        <div className='text-gray-400 text-start ms-10 mt-4 text-[16px]'>{Product.category}</div>
        <div className="card-body  text-start flex-column space-y-2 ms-2 ">
          <h2 className="text-[22px] font-bold text-gray-600 ">{Product.name}</h2>
          <p className='text-justify text-[14px] text-gray-600 flex'><Rating style={{ maxWidth: 80 }} value={Product.rating}  readOnly /></p>
          <p className='text-justify text-[14px] text-gray-600 '>৳{Product.price}</p>

        </div>
      </div>
    );
};

export default ProductCard;