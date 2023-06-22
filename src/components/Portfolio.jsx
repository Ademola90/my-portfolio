import React from 'react'
import nigTilling from '../assets/portfolio/nig_tiling.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reacParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
import {FaGithub, FaGlobe} from 'react-icons/fa'
const Portfolio = () => {

  const portfolio = [
    {
      id: 1,
      src: nigTilling,
      demo: 'https://tiling-company.vercel.app/',
      github: 'https://github.com/Ademola90/Tiling-company.git'

    },
    {
      id: 2,
      src: installNode,
      demo: 'https://github.com/Ademola90/random-user.git',
      github: 'https://github.com/Ademola90/Tiling-company.git'
    },
    {
      id: 3,
      src: navbar,
      demo: 'https://github.com/Ademola90/random-user.git',
      github: 'https://github.com/Ademola90/Tiling-company.git'
    },
    {
      id: 4,
      src: reacParallax,
      demo: 'https://github.com/Ademola90/random-user.git',
      github: 'https://github.com/Ademola90/Tiling-company.git'
    },
    {
      id: 5,
      src: reactSmooth,
      demo: 'https://github.com/Ademola90/random-user.git',
      github: 'https://github.com/Ademola90/Tiling-company.git'
    },
    {
      id: 6,
      src: reactWeather,
      demo: 'https://github.com/Ademola90/random-user.git',
      github: 'https://github.com/Ademola90/Tiling-company.git'
    },
  ]
  return (
    <div name="portfolio" className='bg-indigo-400 w-full text-white md:h-100vh pt-24'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>



        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-6'>

          {
            portfolio.map(({ id, src, demo, github }) => (
              <div key={id} className='shadow-md shadow-gray-600 bg-black rounded-lg'>
              <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
              <div className='flex items-center justify-center'>
    
                <a href={github} className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><FaGithub/></a>

                <a href={demo} className=' w-1/2 px-6 py-3 pl-20 m-4 duration-200 hover:scale-105'><FaGlobe/></a>
              </div>
            </div>
          ))
          }
 
        </div>



      </div>
    </div>
  )
}

export default Portfolio