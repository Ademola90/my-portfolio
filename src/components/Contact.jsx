import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className='w-full h-100vh bg-indigo-500 p-4 text-white pt-24'>
            <div className='flex flex-col p-4 max-w-screen-lg justify-center mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6'>Submit the form below to get in touch with me</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/9e7c1b91-02d6-4049-ba46-1e6616dc2012" method='POST' className='flex flex-col w-full md:w-1/2'>
                        <input
                            type="text"
                            name='name'
                            placeholder='Enter your name'
                            className='bg-transparent p-2 rounded-md border-2 focus:outline-none text-white' />

                        <input
                            type="text"
                            name='email'
                            placeholder='Enter your email'
                            className='bg-transparent my-4 p-2 rounded-md border-2 focus:outline-none text-white' />

                        <textarea 
                        name="message" 
                        placeholder='Enter your message'
                        rows="10" 
                        className='rounded-md px-2 bg-transparent border-2 text-white focus:outline-none'
                        >

                        </textarea>

                        <button className='bg-gradient-to-b rounded-md from-cyan-500 to-blue-500 px-6 py-3 text-white my-8 mx-auto flex items-center hover:scale-110 duration-300'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact