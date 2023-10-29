import React from 'react';

const ContainerMax = ({children}) => {
    return (
        <div className='max-w-{1920px} lg:w-5/6 w-[95%]  mx-auto'>
            {children}
        </div>
    );
};

export default ContainerMax;