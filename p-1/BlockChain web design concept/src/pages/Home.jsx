import React from 'react';
import { ArrowUpRight, Dot, LucideChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Nav from '../components/ui/Nav';
import { Footer } from '../components/ui/Footer';

function Home() {
  return (
    <>
      <header className="pr-2 pl-2 md:pr-6 md:pl-6 min-h-[100vh] text-white relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src="/pawel-czerwinski-NvSQe0VeKBA-unsplash.jpg" 
            alt="Abstract background" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <Nav/>
        
        <div className='flex flex-col justify-center items-center min-h-[50vh] border-t border-b mt-4 rounded-2xl md:rounded-4xl'>
          <div className='w-full flex justify-between pb-2 md:p-2'><Dot/> <Dot/></div>
          <p className='p-4 text-[12px] mt-12 mb-2 md:p-8 md:text-xl md:mt-12'>GO EVERYWHERE REACH EVERYWHERE</p>
          <div className='bg-white/8 backdrop-blur-md border-r border-l border-white min-w-[99.9%] mx-auto pr-4 pl-4 anton-regular text-center'>
            <h2 className='text-[4rem] text-center leading-[60px] md:text-[8rem] md:leading-[120px]'><span className='text-[#AE3C3C]'>B</span>LOCK<span >C</span>HAIN</h2>
            <h2 className='text-[4rem] text-center leading-[60px] md:text-[8rem] md:leading-[120px]'><span className='text-[#AE3C3C]'>U</span>NIVERSE</h2>
          </div>
          <Button variant='outline' className='rounded-2xl mt-18 mb-6 text-[12px] md:mt-18 md:mb-16 md:text-[14px]'>GET STARTED<LucideChevronRight className='animate-caret-blink'/></Button>
          <div className='w-full flex justify-between pt-2 md:p-2'><Dot/> <Dot/></div>
        </div>
        
        <section className='bg-[#FFFFFF] mt-4 p-4 rounded-2xl text-black'>
          <div className='flex justify-between items-center md:p-4 flex-col text-center md:text-left md:flex-row md:items-start'>
            <h2 className='w-full md:w-[40%] text-[2.6rem] font-bold leading-14 md:p-2 md:text-[3.6rem]'>Build without limits</h2>
            <p className='w-full md:w-[60%] text-[1rem] md:p-4 md:text-[1.6rem]'>Developers use evmos as the ethereum canary chain to deploy application of the future. Get all the functionalities of ethereum with the power of IBC and Interchain composability.</p>
          </div>
          
          <div className='flex flex-col items-center justify-between text-center mt-4 md:p-6 md:flex-row md:items-start md:text-left'>
            <div className='md:w-[40%] h-fit box'>
              <p className='text-[#B03A57] text-xl font-semibold'>EVM EXTENSIONS</p>
              <div className='w-full h-[280px] md:h-[400px] rounded-2xl mt-3 relative overflow-hidden'>
                <img 
                  src="/william-daigneault-ju3eqN0gl6Y-unsplash.jpg" 
                  alt="EVM Extensions" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className='absolute inset-0'>
                  <div className='h-[90%] border-t-3 border-b-3 m-4 rounded-4xl bg-white/6 flex flex-col justify-between'>
                    <div className='flex w-full justify-between p-2 text-2xl'>
                      <Dot/> <Dot/>
                    </div>
                    <div className='flex w-full justify-between p-2 text-2xl'>
                      <Dot/> <Dot/>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className='text-[2rem] font-bold mt-4'>The builder's choice</h3>
              <p className='text-[1.2rem] text-black mt-2'>The multi-chain IBC-coordinated architecture that's infinitely scalable with no limits to your applications governance.</p>    
            </div>
            
            <div className='hidden md:flex w-full items-center justify-between space-x-2 mt-8 md:w-[20%] md:mt-56 md:rotate-90 '>
              <p className='text-black tracking-wide font-semibold'>EVM EXTENSIONS </p>
              <div className='w-22 h-px bg-black mt-1 md:mr-2'></div>
              <div className='w-13 h-px bg-black mt-1 md:mr-2'></div>
            </div>
            
            <div className='md:w-[30%] flex flex-col items-start md:mr-8 box mt-8 md:mt-0'>
              <div className='w-full h-[280px] rounded-2xl mt-10 relative overflow-hidden'>
                <img 
                  src="/pexels-googledeepmind-18069696.jpg" 
                  alt="EVM chains" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className='absolute inset-0'>
                  <div className='h-[90%] border-t-3  border-b-3 m-4 rounded-4xl bg-white/10 flex flex-col justify-between'>
                    <div className='flex w-full justify-between p-2 text-2xl'>
                      <Dot/> <Dot/>
                    </div>
                    <div className='flex w-full justify-between p-2 text-2xl'>
                      <Dot/> <Dot/>
                    </div>
                  </div>
                </div>
              </div>
              <p className='text-[1.2rem] mt-4'>Easily create application-specific chains or EVM chains tailored.</p>
            </div>
          </div>
          
          <div className='flex flex-col-reverse items-center justify-between text-center mt-4 md:mt-0 md:p-6 md:items-start  md:flex-row md:text-left'>
            <div className='md:w-[30%] flex flex-col items-center md:items-start box mt-8 md:mt-0'>
              <div className='w-full h-[280px] rounded-2xl mt-10 relative overflow-hidden'>
                <img 
                  src="/philip-oroni-efqRsqQdyTg-unsplash.jpg" 
                  alt="Secure access" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className='absolute inset-0'>
                  <div className='h-[90%] border-t-3  border-b-3 m-4 rounded-4xl bg-white/2 flex flex-col justify-between'>
                    <div className='flex w-full justify-between p-2 text-2xl'>
                      <Dot/> <Dot/>
                    </div>
                    <div className='flex w-full justify-between p-2 text-2xl'>
                      <Dot/> <Dot/>
                    </div>
                  </div>
                </div>
              </div>
              <p className='text-[1.2rem] mt-4'>Specific use cases with secure access to the liquidity users.</p>
              <Button className='rounded-2xl p-4 mt-4  border-black md:mt-8' variant='outline'>START BUILDING <LucideChevronRight/></Button>
            </div>
            
            <div className='hidden md:flex justify-center items-center space-x-1 mt-8 mb-6 md:w-[26%] md:mt-62 md:rotate-90'>
              <p className='text-black tracking-wide font-semibold'>DAPP STORE (COMING SOON) </p>
              <div className='w-22 h-px bg-black mt-1'></div>
            </div>
            
            <div className='md:w-[40%] md:mr-8 box'>
              <p className='text-[#B03A57] text-xl font-semibold'>EVMOS SDK (COMING SOON)</p>
              <div className='w-full h-[280px] md:h-[400px] rounded-2xl mt-3 relative overflow-hidden'>
                <img 
                  src="/1920x1080-px-fractal-gold-minimalism-1189651-wallhere.com.jpg" 
                  alt="EVMOS SDK" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className='absolute inset-0'>
                  <div className='h-[90%] border-t-3 border-b-3 m-4 rounded-4xl bg-white/10 flex flex-col justify-between'>
                    <div className='flex w-full justify-between p-2 text-2xl'>
                      <Dot/> <Dot/>
                    </div>
                    <div className='flex w-full justify-between p-2 text-2xl'>
                      <Dot/> <Dot/>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className='text-[2rem] font-bold mt-4'>Reach Anywhere</h3>
              <p className='text-[1.2rem] mt-2'>The builder's choice with familiar Etherium-based tools that make everything you do developer friendly.</p>    
            </div>
          </div>
        </section>
      </header>
      
      <main className='min-h-[100vh] bg-black text-white pt-12'>
        <section className='flex flex-col gap-4 justify-around items-center mr-4 ml-4 mt-6 mb-6 md:flex-row'>
          {[
            { title: 'MONTHLY ACTIVE USERS', value: '203K+' },
            { title: 'MONTHLY TRANSACTIONS', value: '400K+' },
            { title: 'APPS AND SERVICES', value: '502+' }
          ].map((stat, index) => (
            <div key={index} className='w-full md:w-[30%] border-t-2 border-b-2 rounded-4xl flex flex-col justify-between items-center'>
              <div className='flex w-full justify-between p-2 text-2xl'>
                <Dot/> <Dot/>
              </div>
              <p className='text-[18px] mb-4'>{stat.title}</p>
              <div className='bg-white/5 backdrop-blur-md border-r border-l border-white shadow-lg min-w-[99.9%] pr-8 pl-8 p-0 anton-regular'>
                <h2 className='text-[4rem] text-center'>{stat.value}</h2>
              </div>
              <span className='h-[2px] w-[40%] bg-white mt-6'></span>
              <div className='flex w-full justify-between p-2 text-2xl'>
                <Dot/> <Dot/>
              </div>
            </div>
          ))}
        </section>
        
        <section className='flex flex-col md:flex-row justify-around items-center mb-6 mr-6 ml-6 md:justify-center mt-16 md:gap-8'>
          <div className='w-full h-[280px] md:w-[45%] md:h-[370px] rounded-2xl relative overflow-hidden'>
            <img 
              src="/shubham-dhage-nN9cfTVx1jk-unsplash.jpg" 
              alt="Streamline experience" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className='absolute inset-0'>
              <div className='h-[90%] border-t-3 border-b-3 m-4 rounded-4xl bg-white/10 flex flex-col justify-between'>
                <div className='flex w-full justify-between p-2 text-2xl'>
                  <Dot/> <Dot/>
                </div>
                <div className='flex w-full justify-between p-2 text-2xl'>
                  <Dot/> <Dot/>
                </div>
              </div>
            </div>
          </div>
          
          <div className='w-full md:w-[50%] top-0 mt-8 flex flex-col justify-center items-center md:justify-around md:items-start md:ml-4'>
            <div className='md:text-center w-full'>
              <h2 className='text-[2rem] leading-[32px] md:text-[2.6rem] font-semibold md:leading-[52px]'>STREAMLINE YOUR EXPERIENCE</h2>
            </div>
            <div className='flex justify-center mt-4 gap-8 md:justify-around w-full'>
              <div className='flex w-[40%] md:gap-6'>
                <div className='hidden md:flex bg-white w-[1px] h-[76%] mt-2 md:h-[82%]'></div>
                <div>
                  <h3>001 ____</h3>
                  <p className='text-[1rem] md:text-[1.2rem] mt-2'>Developers use evmos as the ethereum canary chain to deploy applications of the future. Get all the power of IBC and interchain composability.</p>
                  <Button className='rounded-2xl p-1 mt-6 mb-6 text-[12px] md:mt-12 md:mb-20 md:p-4 md:text-[1rem]' variant='outline'>START BUILDING <LucideChevronRight/></Button>
                </div>
              </div>
              <div className='bg-white flex w-[1px] h-[120px] self-center mb-16 md:hidden'></div>
              <div className='flex w-[40%]'>
                <div className='hidden md:flex bg-white w-[1px] h-[82%] mr-4'></div>
                <div>
                  <h3>002 ____</h3>
                  <p className='text-[1rem] md:text-[1.2rem] mt-2'>Developers use evmos as the ethereum canary chain to deploy applications of the future. Get all the power of IBC and interchain composability.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className='bg-white text-black pt-8 p-4 mr-4 ml-4 md:p-8 mt-12 md:mr-10 md:ml-10 rounded-lg'>
          <h2 className='text-[1.5rem] font-bold leading-[28px] md:text-[3rem] text-center md:leading-12'>EVM COMPATIBILITY <br/> CROSS-CHAIN CONNECTIVITY.</h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12'>
            {[
              { 
                img: '/pierre-chatel-innocenti-rYo6x5e8cPE-unsplash.jpg', 
                title: 'Collective exploration', 
                desc: 'Engage with a rapidly growing community' 
              },
              { 
                img: '/pawel-czerwinski-jTEhcxsenME-unsplash.jpg', 
                title: 'Collective exploration', 
                desc: 'Engage with a rapidly growing community' 
              },
              { 
                img: '/pawel-czerwinski-6P_zLT642Rc-unsplash.jpg', 
                title: 'Collective exploration', 
                desc: 'Engage with a rapidly growing community' 
              },
              { 
                img: '/sufyan-to_NHiAZ-hU-unsplash.jpg', 
                title: 'Collective exploration', 
                desc: 'Engage with a rapidly growing community' 
              }
            ].map((item, index) => (
              <div key={index} className='flex flex-col items-center'>
                <div className='w-[310px] h-[200px] rounded-2xl relative overflow-hidden'>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className='absolute inset-0 flex justify-center items-center'>
                    <div className='h-[90%] w-full border-t-3 border-b-3 m-4 rounded-4xl bg-white/10 flex flex-col justify-between'>
                      <div className='flex w-full justify-between p-2 text-2xl'>
                        <Dot/> <Dot/>
                      </div>
                      <div className='flex w-full justify-between p-2 text-2xl'>
                        <Dot/> <Dot/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center items-center gap-2 mt-4 cursor-pointer w-[80%]'>
                  <div className='p-4 flex items-center bg-gray-400 text-black rounded-4xl font-extrabold text-[24px]'>
                    <ArrowUpRight/>
                  </div>
                  <div>
                    <h3 className='text-[1.2rem] font-semibold'>{item.title}</h3>    
                    <p className='text-sm'>{item.desc}</p>
                  </div> 
                </div>
              </div>
            ))}
          </div>
          
          <div className='flex justify-center items-center mt-8'>
            <Button className='rounded-2xl p-4 mt-8 mb-6 border-black' variant='outline'>START BUILDING <LucideChevronRight/></Button>
          </div>
        </section>
      </main>
      
      {/* <footer className='bg-black pr-4 pl-4 md:pl-12 md:pr-12 pt-14 text-white'>
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
      </footer> */}
      <Footer/>
    </>
  )
}

export default Home;