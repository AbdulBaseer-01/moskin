import { ArrowUpRight } from 'lucide-react'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='bg-black pr-4 pl-4 md:pl-12 md:pr-12 pt-14 text-white'>
            <div className='flex flex-col md:flex-row justify-between'>
              <div className='md:w-[45%] w-full mb-8 md:mb-0'>
                <h1 className='text-[3.6rem] md:text-[5rem] uncial-antiqua-regular font-semibold'>MO<span className='text-[#B03A57]'>SK</span>IN</h1>
                <p className='text-[1rem] md:text-[1.2rem] font-semibold text-gray-200 mt-4'>Easily create application-specific chains or EVM chains tailored for specific use cases with secure access to liquidity for your users.</p>
              </div>
              
              <div className='w-full md:w-[55%] grid grid-cols-2 md:grid-cols-3 gap-8 text-gray-400'>
                <div>
                  <span className='text-[1.2rem] md:text-[1.5rem] text-white block mb-4'>Company</span>
                  <ul className='space-y-2'>
                    {['Home', 'Technology', 'Community', 'Mission', 'Careers'].map((item, index) => (
                      <li key={index}>
                        <a className='flex items-center group cursor-pointer hover:text-white'>
                          <span className='text-[14px] md:text-[18px]'>{item}</span>
                          <ArrowUpRight className='ml-1 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline' size={16}/>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <span className='text-[1.2rem] md:text-[1.5rem] text-white block mb-4'>Connect</span>
                  <ul className='space-y-2'>
                    {['Github', 'Discord', 'Instagram', 'Twitter', 'LinkedIn'].map((item, index) => (
                      <li key={index}>
                        <a className='flex items-center group cursor-pointer hover:text-white'>
                          <span className='text-[14px] md:text-[18px]'>{item}</span>
                          <ArrowUpRight className='ml-1 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline' size={16}/>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className='col-span-2 md:col-span-1 mt-8 md:mt-0'>
                  <span className='text-[1.2rem] md:text-[1.5rem] text-white block mb-4'>Resources</span>
                  <ul className='space-y-2'>
                    {['EVMOS Docs', 'Academy', 'Press Kit', 'Our Blog', 'Cookie Policy'].map((item, index) => (
                      <li key={index}>
                        <a className='flex items-center group cursor-pointer hover:text-white'>
                          <span className='text-[14px] md:text-[18px]'>{item}</span>
                          <ArrowUpRight className='ml-1 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline' size={16}/>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className='h-px w-full bg-white mt-12'></div>
            <div className='flex flex-col md:flex-row justify-between items-center pt-4 pb-4 text-sm'>
              <a className='mb-2 md:mb-0 hover:underline'>Privacy Policy</a>
              <p className='mb-2 md:mb-0'>© 2025 <span className='text-[#B03A57]'>MOSKIN</span>. All rights reserved.</p>
              <a className='hover:underline'>Terms & Conditions</a>
            </div>
          </footer>
  )
}
