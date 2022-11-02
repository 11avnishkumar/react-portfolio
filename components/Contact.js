import React from 'react'
const Contact = () => {
  return (
    <div className=''>
        <p className='text-cyan-500 text-4xl mb-3'>CONTACT</p>
        <form action="">
            <div className="grid grid-cols-2 gap-4 mb-3">
                <div className=''>
                    <label htmlFor="">First Name</label>
                    <input type="text"  className='w-full border-indigo-700 rounded-md shadow-sm'/>
                </div>
                <div className=''>
                    <label htmlFor="">Last Name</label>
                    <input type="text"  className='w-full border-indigo-700 rounded-md shadow-sm'/>
                </div>
            </div>
            
            <div className='mb-3'>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className='w-full border-indigo-700 rounded-md shadow-sm'/>
            </div>
            <div>
                <label htmlFor="">Message</label>
                <textarea name="" id="" cols="30" rows="5" className='w-full border-indigo-700 rounded-md shadow-sm'></textarea>
            </div>
            <input type="submit" className='w-full py-3 px-3 bg-slate-700 text-white rounded-md cursor-pointer focus:ring-1' />
        </form>
    </div>
  )
}

export default Contact