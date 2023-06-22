import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import resume from './assets/webdev resume.png'

const SocialLinks = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
        Linkedin <FaLinkedin size={30}/>
        </>
      ),
      href: 'https://www.linkedin.com/in/ademola-abdullahi-734986270/',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
        Github <FaGithub size={30}/>
        </>
      ),
      href: 'https://github.com/Ademola90',
    },
    {
      id: 3,
      child: (
        <>
        Mail <HiOutlineMail size={30}/>
        </>
      ),
      href: 'mailto: ademolaabdullahi2000@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
        Resume <BsFillPersonLinesFill size={30}/>
        </>
      ),
      href: resume,
      style: 'rounded-br-md',
      download: true,
    },
  ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

          {
            links.map(({id, child, download, href, style}) => (
                       <li 
                       key={id} 
                       className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'  + style}>
                <a href={href} 
                className='flex justify-between items-center w-full text-white'
                download = {download}
                terget= '_blank'
                rel='noreferrer'

                >
                    {child}
                </a>
            </li>   
            ))
          }

        </ul>
    </div>
  )
}

export default SocialLinks