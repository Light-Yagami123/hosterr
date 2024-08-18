import React from 'react'

const Body = () => {
  return (
    <div className='lg:flex' >
      <div className='flex items-center justify-center lg:flex-1 lg:order-2'>
        <img src="./assets/Blue-Shape.svg" alt="1st" className='-rotate-[45deg] h-64 md:h-80'/>
        <img src="./assets/Pink-Shape.svg" alt="2nd" className='absolute -rotate-[30deg] h-64 md:h-80 '/>
        <img src="./assets/Purple-Shape.svg" alt="3rd" className='absolute -rotate-[15deg] h-64 md:h-80'/>
        <img src="./assets/Hero-Model.png" alt="hero" className='absolute h-64 md:h-80'/>
      </div>
      <div className='flex flex-col gap-5 lg:flex-1 lg:order-1'>
        <h1 className='font-playfair text-4xl font-extrabold leading-tight '>Host your website in less than 5 minutes.</h1>
        <p className='font-lato text-gray-600 '>With Hosterr, get your website up and running in no less than 5 minutes with the most competitive pricing packages available online.</p>
        <form action="" className='flex flex-col gap-4 md:flex-row'>
          <input type="email" placeholder='Enter e-mail address' className='rounded-lg p-4'/>
          <button className='bg-blue-700 text-white rounded-lg p-3 hover:bg-blue-500'>Join Waitlist</button>
        </form>
        <div className='flex gap-3'>
          <img src="./assets/Checkmark.svg" alt="check" />
          <p className='text-gray-600 font-medium '>No spam, ever. Unsubscribe anytime.</p>
        </div>
      </div>
    </div>

  )
}

export default Body
