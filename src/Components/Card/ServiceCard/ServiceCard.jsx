import React from 'react';

const ServiceCard = ({Service}) => {
    console.log(Service)
    return (
        <div className="card lg:w-96 bg-amber-100 shadow-xl w-full">
        <figure className="px-10 pt-10">
            <img src={Service.image} alt="service"/>
            
        </figure>
        <div className="card-body items-center text-center flex-column justify-end space-y-2 ">
          <h2 className="text-[22px] font-bold">{Service.title_english}</h2>
          <p className='text-justify text-[14px]'>{Service.description_english}</p>
          
        </div>
      </div>
    );
};

export default ServiceCard;