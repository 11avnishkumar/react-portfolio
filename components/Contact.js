import React from 'react'
const Contact = () => {
  return (
    <div className='px-8 py-8 flex justify-center items-center'>
        <div className=''>
            <p className='dark:text-cyan-500 text-4xl mb-3'>CONTACT</p>
            <form action="">
                <div className="grid grid-cols-2 gap-4 mb-3">
                    <div className=''>
                        <label htmlFor="">First Name</label>
                        <input type="text"  className='w-full border-slate-700 shadow-sm' placeholder='First Name'/>
                    </div>
                    <div className=''>
                        <label htmlFor="">Last Name</label>
                        <input type="text"  className='w-full border-slate-700 shadow-sm' placeholder='Last Name'/>
                    </div>
                </div>
                
                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className='w-full border-slate-700 shadow-sm'placeholder='Email'/>
                </div>
                <div className='mb-4'>
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" cols="30" rows="5" className='w-full border-slate-700 shadow-sm' placeholder='Enter your query'></textarea>
                </div>
                <input type="submit" className='py-3 px-3 bg-slate-700 text-white w-48  cursor-pointer focus:ring-1' />
            </form>
        </div>
    </div>
  )
}

export default Contact