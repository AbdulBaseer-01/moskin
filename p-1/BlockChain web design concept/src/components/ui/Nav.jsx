import { ArrowUpRight, Cross, Dot, LineSquiggle, LucideChevronRight, Menu } from 'lucide-react'
import React from 'react'
import { Button } from "@/components/ui/button"
import {useState} from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    
        const toggleNav = () => {
            setIsOpen(!isOpen)
        }
  return (
    <nav className=' flex justify-between items-center m-0 h-14 top-0 pr-2 pl-2 py-8'>
                    <Link to="/"><h1 className='text-3xl font-bold uncial-antiqua-regular text-shadow-white cursor-pointer'>MO<span className='text-[#B03A57]'>SK</span>IN</h1></Link>
                    <ul className='hidden lg:flex gap-6 text-[18px] cursor-pointer'>
                        <li><Link to="/technology">Technology</Link></li>
                        <li><a>Mission</a></li>
                        <li><a>Careers</a></li>
                        <li><a>About us</a></li>
                        <li><a>Community</a></li>
                    </ul>
                    <Link to="/contact"><div className='hidden lg:flex justify-center items-center gap-2 text-[18px] cursor-pointer'>
                        Contact<span className='p-1 flex items-center bg-white text-black rounded-4xl text-xs'><ArrowUpRight/></span>
                    </div></Link>
                    <div className='lg:hidden '>
                        <button onClick={toggleNav} ><Menu/></button>
                        <div className={`fixed w-full inset-0 justify-end flex flex-col items-end z-50 transform ${isOpen ? 'flex' : 'hidden'} transition-flex duration-400 ease-in-out`} onClick={toggleNav}>
                            <div 
                            className="inset-0 bg-black bg-opacity-50"
                            onClick={toggleNav}
                            ></div>
                            <div className='w-64 h-full bg-black/50 backdrop-blur-md shadow-lg pl-4 pt-4'>
                                <button onClick={toggleNav} className='rotate-45'><Cross/></button>
                                <ul className='lg:hidden flex flex-col gap-6 mt-4 text-[18px] cursor-pointer'>
                                    <li><Link to="/technology">Technology</Link></li>
                                    <li><a>Mission</a></li>
                                    <li><a>Careers</a></li>
                                    <li><a>About us</a></li>
                                    <li><a>Community</a></li>
                                    <Link to="/login"><div className='flex items-center gap-2 mt-4 text-[18px] cursor-pointer'>
                                        Contact<span className=' flex items-center bg-white text-black rounded-4xl text-xs'><ArrowUpRight/></span>
                                    </div></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
  )
}

export default Nav