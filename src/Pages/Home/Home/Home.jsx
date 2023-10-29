import React, { useEffect, useState } from 'react';
import image from '../../../assets/honey_logo.png'
import Carousal from '../../../Components/Carousal/Carousal2';
import axios from 'axios';
import ServiceCard from '../../../Components/Card/ServiceCard/ServiceCard';
import ProductCard from '../../../Components/Card/ProductCard/ProductCard';
import Marquee from 'react-fast-marquee';
const Home = () => {
    const[Service,setService]=useState([]);
    const[Product,setProduct]=useState([]);

   useEffect(() => {
    axios.get('Services.json')
      .then((response) => {
        setService(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  useEffect(() => {
    axios.get('Products.json')
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
    return (
        <div>
            <div className=''><Carousal/></div>
            <div className='md:flex flex-column gap-10 items-center justify-center mb-2 lg:mt-28 md:mt-28 mt-12 '>
    <div className='flex-1'>
<img src="https://img.freepik.com/free-photo/fresh-honeycombs_144627-17380.jpg?size=626&ext=jpg&ga=GA1.1.617391450.1698571397&semt=ais" alt="about"/>
    </div>
    <div className='flex-1 text-[16px] flex-column space-y-3 text-justify'>
    <div className='text-start text-amber-300 font-bold lg:text-[35px] text-[28px]'>Who we are</div>

   <p> 37 years journey is not a small matter! From the inception of Solid Honey to the present day, every garment has the story of our hard work, toil and effort. There are countless moments across the memory canvas! Some moments are captured in pictures, some moments are only in the depths of the mind.</p>

    <p>We are always happy to share the captured images of our past moments with all our esteemed stakeholders. We believe that this will give you a fair understanding of our business and heritage as well as inspiration for your own work.
    Our memory canvas consists of still images and recorded videos of honey extraction, refining, marketing, training and other activities from the beginning.</p>

   <p> Various pictures of participating in various fairs across the country and outside the country and exhibiting products in the fair premises, selling, responding to customer inquiries, corporate communication have also been placed in our photo gallery. Our photo gallery is also growing in size with the increasing performance of Solid Honey day by day.</p>


    </div>
  </div>
            <div className='lg:mt-40 md:mt-40 mt-12 grid lg:grid-cols-3 grid-cols-1 gap-6'>{
                Service.map(index=><ServiceCard key={index.id} Service={index}></ServiceCard>)
            }</div>
            <div className='text-center text-gray-600 font-bold mb-6 lg:mt-40 md:mt-40 mt-12 lg:text-[35px] text-[28px]'>Our Products</div>
             <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>{
                Product.map(index=><ProductCard key={index.id} Product={index}></ProductCard>)
            }</div>
<div className='text-center text-gray-600 font-bold mb-6 lg:mt-40 md:mt-40 mt-12 lg:text-[35px] text-[28px]'>Sales Channels</div>
<div className='grid lg:grid-cols-4 grid-cols-1 gap-3 lg:mx-40'>
    <div><img src="https://www.solidhoneybd.com/wp-content/uploads/2023/08/Sales-Point-Solid-Honey-01.png"style={{height:"100px"}}alt="sales channels"/></div>
    <div><img src="https://www.solidhoneybd.com/wp-content/uploads/2023/08/Sales-Point-Solid-Honey-02.png"style={{height:"100px"}}alt="sales channels"/></div>
    <div><img src="https://www.solidhoneybd.com/wp-content/uploads/2023/08/Sales-Point-Solid-Honey-03.png"style={{height:"100px"}}alt="sales channels"/></div>
    <div><img src="https://www.solidhoneybd.com/wp-content/uploads/2023/08/Sales-Point-Solid-Honey-04.png"style={{height:"100px"}}alt="sales channels"/></div>
</div>


<div className='text-center text-gray-600 font-bold mb-6 lg:mt-40 md:mt-40 mt-12 lg:text-[35px] text-[28px]'>Wholesale Buyer</div>
<Marquee>
    <img src="https://www.solidhoneybd.com/wp-content/uploads/2023/08/host-assist-02-07-150x150.jpg"style={{marginRight:"40px"}} alt="wholesale buyer"/>
    <img src="https://www.solidhoneybd.com/wp-content/uploads/2023/08/host-assist-02-09-150x150.jpg"style={{marginRight:"40px"}} alt="wholesale buyer"/>
    <img src="https://www.solidhoneybd.com/wp-content/uploads/2023/08/host-assist-02-10-150x150.jpg"style={{marginRight:"40px"}} alt="wholesale buyer"/>
    <img src="https://www.solidhoneybd.com/wp-content/uploads/2023/08/host-assist-02-11-150x150.jpg"style={{marginRight:"40px"}} alt="wholesale buyer"/>
    <img src="https://www.solidhoneybd.com/wp-content/uploads/2023/08/host-assist-02-05-150x150.jpg"style={{marginRight:"40px"}} alt="wholesale buyer"/>
    <img src="https://www.solidhoneybd.com/wp-content/uploads/2023/08/host-assist-02-06-150x150.jpg"style={{marginRight:"40px"}} alt="wholesale buyer"/>
    <img src="https://www.solidhoneybd.com/wp-content/uploads/2023/08/host-assist-02-09-150x150.jpg"style={{marginRight:"40px"}} alt="wholesale buyer"/>
  </Marquee>
  <div className='text-center text-gray-600 font-bold mb-2 lg:mt-40 md:mt-40 mt-12 lg:text-[35px] text-[28px]'>Our Success</div>
<div className='md:flex flex-column gap-10 items-center justify-center mb-6'>
  <div className='flex-1 text-[16px] flex-column space-y-3 text-justify'>

   <p> The present age is the age of internet. It is impossible to imagine a single moment without internet. In keeping with the times, virtual e-commerce sites have developed along with traditional methods. Through which you can order online at home and get your favorite products.</p>

    <p>Solid Honey is one such establishment. Whose journey is long.</p>

   <p> Since 1983, it has been working with integrity. He has won many national awards. It is noted that they are one of the best organizers of the Mau Mela organized by the Directorate of Agricultural Extension (Ministry of Agriculture) and Bangladesh Small and Small Industries.</p>
  <p>There are some unscrupulous traders in Bangladesh who are constantly turning healthy food into poison. The food that is eaten for healing, that food is formed in the body from cancer to thousands of deadly diseases.</p>
<p>Solid {`Hari's`} future plans revolve around the {`country's`} interests and people. Casting down the wicked, they dream that every infant, from the new-born to the man crouched with age, may taste unadulterated pure honey until death.

</p>
    </div>
    <div className='flex-1'>
<img src="https://img.freepik.com/free-photo/jar-with-fresh-honey_144627-17145.jpg?size=626&ext=jpg&ga=GA1.1.617391450.1698571397&semt=ais" alt="about"/>
    </div>
   
  </div>
        </div>
    );
};

export default Home;