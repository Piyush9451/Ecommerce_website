import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'


const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to our e-commerce store, where quality meets convenience. We offer premium products tailored to your lifestyle and needs.</p>
          <p>At our core, we believe in providing carefully curated products that meet your lifestyle needs. From trendy fashion to essential home goods, we offer a wide selection to suit every taste and preference.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to provide exceptional value, seamless shopping experiences, and outstanding customer support. Shop with confidence and discover excellence today!</p>
          </div>
      </div>
      <div className="text-4xl py-4">
       <Title text1={'Why'} text2={'Choose Us'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
         <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>We ensure top-notch quality through rigorous testing, strict standards, and continuous improvements to deliver reliable, durable, and exceptional products
              </p>
         </div>
         <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Covenience:</b>
              <p className='text-gray-600'>We prioritize your convenience with user-friendly navigation, secure payments, fast shipping, easy returns, and 24/7 customer support for seamless shopping.
              </p>
         </div>
         <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>
              We deliver exceptional customer service through prompt responses, personalized support, problem-solving solutions, and a dedicated team focused on your satisfaction.
              </p>
         </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
