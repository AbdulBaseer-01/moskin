import React, { useState } from 'react'
import Nav from '../components/ui/Nav'
import { ArrowRightCircle, ArrowUpRight, Backpack, ListCheck, PlusIcon, Settings2, Square } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Footer } from '../components/ui/Footer'

function Technology() {
    const [openIndex, setOpenIndex] = useState(1);

    const faqs = [
        {
            question: "What is react nfjivbn fnvok fv kmn nklkmf cjkok?",
            answer: "React is a Javascript library for building user interfaces"
        },
        {
            question: "What is react kodfvkn jkokjn njckkjn jioijn ?",
            answer: "React is a Javascript library for building user interfaces hjkjn chjkjn dcuikjn cb hjn cuj chjjn cuj"
        },
        {
            question: "What is react  nfkvokmn fmvk?",
            answer: "React is a Javascript library for building user interfaces React is a Javascript library for building user interfaces jhdc hdjchjijn chj hnb dc jhn scbuikn dcb hjkjn chjkjn dcuikjn cb hjn cuj chjjn cuj"
        },
        {
            question: "What is react nfvkooikjnb dnvo kn nvkm vjnf vjij vi jn cjkkn i in kokm?",
            answer: "React is a Javascript library for building user interfaces"
        },
        {
            question: "What is react jdivijn jnvi ikn nv oikmn vnkoijnb cnmoijn vkjnfc nokm c kokjn dckjn k?",
            answer: "React is a Javascript library for building user interfaces jhdc hdjchjijn chj hnb dc jhn scbuikn dcb hjkjn chjkjn dcuikjn cb hjn cuj chjjn cuj"
        },
        
    ]

    const toogleIndex = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    }

  return (
    <>
        <header className='pr-2 pl-2 md:pr-6 md:pl-6 bg-black text-white'>
            <Nav/>
            <div style={{
                            backgroundImage: "url('/pexels-themob000-30766684.jpg')",
                            backgroundSize: 'cover',
                            minHeight:'70vh',
                            color: 'white'
                            }} className='mr-2 ml-2 flex justify-end rounded-2xl mt-2'>
                {/* <h1 className='pl-4 text-[8rem] bg-gradient-to-r from-white to-[#474444] bg-clip-text text-transparent  font-semibold anton-regular leading-[140px]'>
                    MOSKIN
                </h1> */}
            </div>
            
            <div className='flex flex-col justify-center items-center overflow-hidden mt-2'>
                <div className='flex justify-between pl-2 mt-2'>
                    <h2 className='w-[65%] text-[3.4rem] leading-[60px]  font-bold anton-regular'>Blockchain Technology<br/><span className='text-[#474444]'>Redefined</span></h2>
                    <p className='w-[35%] text-xl leading-[25px] font-semibold'>We're pushing boundaries by combining Etherium's robust developer ecosystem with Cosmos' seamless interperability. Build, connect, and scale faster than ever before - without compromising security or performance.</p>
                </div>
                <div className='h-px w-[99%] mt-4 pr-4 pl-4 bg-white '></div>
            </div>
            
            <div className='w-full mt-8 text-center'>
                <h2 className='text-2xl font-semibold'>We're reimagining the blockchain experience - combining modular architecture, intuitive design, and cross-chain compatibility to help developers build smarter, faster, and with complete freedom.</h2>
                <Button variant='outline' className='animate-bounce p-6 rounded-4xl mt-12 text-lg'>Schedule A Meeting <span className='p-1 flex items-center bg-white text-black rounded-4xl text-xs animate-pulse'><ArrowRightCircle/></span></Button>    
            </div>
            
            <div className='flex  justify-between p-2 mt-4'>
                <p className='flex p-2 '>100% Etherium-compatible</p>
                <p className='flex p-2'>Native IBC Cross-Chain Support</p>
                <p className='flex p-2'>Finally in Under 1 second</p>
            </div>
            
        </header>
        <main className='bg-black md:pr-6 md:pl-6 pr-2 pl-2'>
            <section className='bg-white mr-2 ml-2 pr-6 pl-6 pb-6 text-black rounded-2xl'>
                <div className='flex justify-between'>
                    <div className='w-[30%] flex flex-col justify-between'>
                        <p className='uppercase mt-20 text-[20px] ml-2'>Why we're different</p>
                        <div style={{
                                backgroundImage: "url('/pexels-googledeepmind-18069696.jpg')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                maxHeight: '400px',
                                color: 'white'
                                }} className=' h-[320px] rounded-2xl mt-10 relative'></div>
                    </div>
                    <div className='w-[30%] items-end flex flex-col justify-end'>
                        <ul>
                            <li>
                                <h3 className='text-[2.8rem] font-bold anton-regular text-[#474444]'>12,000+</h3>
                                <p className='text-2xl'>Smart contracts deployed on-chain.</p>
                            </li>
                            <li>
                                <h3 className='text-[2.8rem] font-bold anton-regular text-[#474444]'>1,000+</h3>
                                <p className='text-2xl'>Developers actively building with our SDK.</p>
                            </li>
                            <li>
                                <h3 className='text-[2.8rem] font-bold anton-regular text-[#474444]'>3,500+</h3>
                                <p className='text-2xl'>Asset transfers via IBC.</p>
                            </li>
                            <li>
                                <h3 className='text-[2.8rem] font-bold anton-regular text-[#474444]'>98%</h3>
                                <p className='text-2xl'>Developer satisfaction rate from feedbacks.</p>
                            </li>
                            <li>
                                <h3 className='text-[2.8rem] font-bold anton-regular text-[#474444]'>3X Integration speed</h3>
                                <p className='text-2xl'>Compared to traditional L1 onboarding.</p>
                            </li>
                        </ul>
                    </div>
                    <div className='w-[30%] flex items-end justify-end'>
                        <div style={{
                                backgroundImage: "url('/pexels-googledeepmind-17485706.jpg')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                maxHeight: '600px',
                                color: 'white'
                                }} className='w-full h-[560px] rounded-2xl mt-10 relative '>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex min-h-[80vh] justify-between bg-[#474444] mr-2 ml-2 rounded-2xl pr-4 pl-4 mt-8 pt-6'>
                <div className='p-4 mb-4'>
                    <img 
                    src='/pexels-googledeepmind-17485706.jpg' 
                    className="w-full h-full object-cover rounded-2xl shadow-[2px_4px_20px]"
                    loading="lazy"
                  />
                </div>
                <div className='flex flex-col justify-between p-4 text-black'>
                    <div >
                        <h2 className='text-[2rem] font-bold leading-[40px] mb-2'>Turning blockchain into a seamless building experience</h2>
                        <p className='font-semibold text-[18px]'>We help developers design, deploy, and connect decentralized applications without the usual complexity. From modular architecture and EVM compatibility to native IBC and intuitive tooling, we make every step of blockchain development simpler. Whether you're launching a smart contract or enabling cross-chain transactions, MOSKIN is your guide to building faster and smarter.

                           <br/> We started MOSKIN to fix what traditional platforms overlook - true interporability, flexible infrastructure, and a developer-first design that accelerates innovation.
                        </p>
                    </div>
                    <div>
                        <p className='text-[1.2rem] font-bold text-black'>Why we're different?</p>
                        <ul className='flex gap-4 m-2'>
                            <li className='p-2 bg-black rounded-lg text-white'>100% Verified Listings</li>
                            <li className='p-2 bg-black rounded-lg text-white'>No Hidden Fees</li>
                            
                        </ul>
                        <ul className='flex gap-4 m-2'> 
                            <li className='p-2 bg-black rounded-lg text-white'>Transparent Pricing</li>
                            <li className='p-2 bg-black rounded-lg text-white'>Instant Booking</li>
                            <li className='p-2 bg-black rounded-lg text-white'>Local Expert Agents</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className='min-h-[80vh] bg-white mr-2 ml-2 rounded-2xl pr-4 pl-4 mt-8 pt-6'>
                <div className='text-center'>
                    <h2 className='text-[2.8rem] font-bold'>Frequently Asked Questions</h2>
                    <p className='text-[1.2rem] font-semibold'>These are the questions we here more often.</p>
                </div>
                <div className='md:flex justify-center items-center'>
                    <div className='p-4'>
                    {faqs.map((faq, i) => 
                        <div key={i} onClick={() => toogleIndex(i)} className='cursor-pointer shadow-2xl p-2 rounded-lg'>
                            <div className='flex justify-between mt-2 p-2'>
                                <h3 className='text-[1.4rem] font-semibold'>{faq.question}</h3>
                                <span className={`transform transition-transform duration-300 
                                    ${openIndex === i ? "rotate-[45deg]" : ""}`}
                                >
                                    <PlusIcon/>
                                </span>
                            </div>
                            <div className={`${openIndex === i ? "max-h-60" : "max-h-0"} overflow-hidden m-2`}>
                                <p className='text-[1.2rem]'>{faq.answer}</p>
                                <span className='h-4 w-full mt-[12px] text-black bg-black'></span>
                            </div>
                        </div>
                    )}
                </div>
                <div className='bg-[#474444] h-full'>
                    <h2>Don't see the answer you need?</h2>
                    <p>That's ok. Just drop a message and we willget back to you ASAP.</p>
                    <Button>Contact Us</Button>
                </div>
                </div>
            </section>

            <section>
                <h2>Take Full Control of Your Financial Future Today</h2>
                <p>Start Taking Charge of Your Finances and Build a Better Tomorrow</p>
                <Button>Contact Us</Button>
            </section>






            {/* <section className='text-white text-center mt-20 mb-20 min-h-[100vh]'>
                <p className='font-semibold text-[1.3rem]'>Philosophy</p>
                <h2 className='font-bold text-[4.2rem]  leading-18 mt-4'>TECHNOLOGY WITH <br/> INTEGRITY</h2>
                <p className='text-[1.6rem] mt-4 break-words'>We make blockchain accessible, fair, and sustainable by comitting to</p>
                <div>
                    <div className='flex justify-between mr-6 ml-6 mt-8 mb-8 text-black'>
                        <div className='flex flex-col items-center w-[35%] bg-white pt-6 pb-6'>
                            <span className=' p-6 rounded-lg bg-[#474444] text-white'><Backpack/></span>
                            <h3 className='font-bold text-[2.1rem]'>Fair Material Practices</h3>
                            <p className='text-[1.4rem]'>Ensuring suitabable practices for shell stakeholders.</p>
                        </div>
                        <div className='h-[150%] flex flex-col items-center w-[30%] bg-white'>
                            <span className='p-6 rounded-lg bg-[#474444] text-white'><ListCheck/></span>
                            <h3 className='font-bold text-[2.1rem]'>Regulatory Compilance</h3>
                            <p className='text-[1.4rem]'>Ensuring suitabable practices for shell stakeholders.</p>
                        </div>
                        <div className='flex flex-col items-center w-[35%] bg-white pt-6 pb-6'>
                            <span className='p-6 rounded-lg bg-[#474444] text-white'><Settings2/></span>
                            <h3 className='font-bold text-[2.1rem]'>Robust Risk Management</h3>
                            <p className='text-[1.4rem]'>Ensuring suitabable practices for shell stakeholders.</p>
                        </div>
                    </div>
                </div>
                <p>These pillars, combined with blockchains inherent transperency and immutability, position us as a trusted leader in the technology sector.</p>
                <h2>
                    <span>"</span>
                    TECHNOLOGY POWERS US;<br/>OUR CLIENTS' SUCCESS DEFINES US
                </h2>
            </section> */}
            {/* <section>
                <img src="" alt="" />
                <div>
                    <div>
                        <h3>ENGAGEMENT</h3>
                        <p>At MOSKIN Group, we support the full tech ecosystem</p>
                        <Button>Contact Us</Button>
                    </div>
                    <div>
                        <p>From inception to deployment, adoption and growth. Through initiatives like hackathons and university start-up competitions, we we empower the next generation of innovators to lead change.</p>
                    </div>
                </div>
            </section> */}
        </main>
        <Footer/>
    </>
  )
}

export default Technology