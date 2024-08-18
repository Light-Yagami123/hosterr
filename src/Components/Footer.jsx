import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-3 md:flex-row md:justify-between'>
        <ul className='flex gap-4 font-lato font-medium text-gray-600'>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
        <div className='flex gap-4 '>
          <img src="./assets/Help-Avatar.svg" alt="help" />
          <div className='font-lato'>
            <p>Have any questions?</p>
            <a href="#" className='font-bold'>Talk to a specialist</a>
          </div>
        </div>
    </div>
  )
}

export default Footer
