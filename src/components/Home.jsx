import React from 'react'
import HomePic from '../assets/HomePic.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {


    return (
        <div name="home" className='h-100vh w-full bg-indigo-400'>
            <div className='max-w-screen-lg pt-40 gap-48 mx-auto flex flex-col items-center justify-center h-full px-16 md:flex-row'>
                <div className='flex flex-col  justify-center h-full'>
                    <h2 className='text-2xl sm:text-5xl font-bold text-white'>
                        {/* I am a Full Stack Developer */}
                        Hi, <br />
                        I'm Abdullahi <br />
                        web developer
                    </h2>
                    <p className='text-black py-4 max-w-md'>
                        I have 4 Years of experience in building and desgining software,
                        using technology like JavaScript, Reat, Tailwind and Node Js.
                    </p>

                    <div>

                        <Link to='contact' smooth duration={500} className='group text-indigo-400 font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-white cursor-pointer'>
                            CONTACT ME
                            <span className='group-hover:rotate-90 duration-200'>
                                <MdOutlineKeyboardArrowRight size={25} />
                            </span>
                        </Link>



                    </div>
                </div>

                <div>
                    <img src={HomePic} alt='description' className='rounded-2xl ' />
                </div>
            </div>
        </div>
    )
}

export default Home