import React from 'react'
import Image from "next/image";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
const Services = () => {
  return (
    <section>
        <div className='dark:text-white'>
        <h3 className='uppercase text-3xl py-1 dark:text-cyan-500'>Services</h3>
        <p className='text-md py-2 leading-8 text-grey-800'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius culpa deserunt officia earum amet, dolor quam facilis, vitae natus quos cumque magnam maiores quo voluptas quod tempora accusamus? Veritatis, laudantium.</p>
        </div>
        <div className='lg:flex gap-10'>
        <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:text-white'>
            <Image src={design} width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className='py-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, libero omnis. Necessitatibus voluptates quidem reiciendis quos magnam, neque non! Quibusdam odit velit dolor possimus eius exercitationem tempore illo iure repellat?
            </p>
            <h4 className='py-4 text-teal-600'>Design tools I Use</h4>
            <p className='tex-grey-800 py-1'>Photoshop</p>
            <p className='tex-grey-800 py-1'>Illustrator</p>
            <p className='tex-grey-800 py-1'>C++</p>
            <p className='tex-grey-800 py-1'>Java</p>
            <p className='tex-grey-800 py-1'>Html</p>
            <p className='tex-grey-800 py-1'>Css</p>
            <p className='tex-grey-800 py-1'>Heroku</p>
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:text-white'>
            <Image src={code} width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className='py-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, libero omnis. Necessitatibus voluptates quidem reiciendis quos magnam, neque non! Quibusdam odit velit dolor possimus eius exercitationem tempore illo iure repellat?
            </p>
            <h4 className='py-4 text-teal-600'>Design tools I Use</h4>
            <p className='tex-grey-800 py-1'>Photoshop</p>
            <p className='tex-grey-800 py-1'>Illustrator</p>
            <p className='tex-grey-800 py-1'>C++</p>
            <p className='tex-grey-800 py-1'>Java</p>
            <p className='tex-grey-800 py-1'>Html</p>
            <p className='tex-grey-800 py-1'>Css</p>
            <p className='tex-grey-800 py-1'>Heroku</p>
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:text-white'>
            <Image src={consulting} width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className='py-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, libero omnis. Necessitatibus voluptates quidem reiciendis quos magnam, neque non! Quibusdam odit velit dolor possimus eius exercitationem tempore illo iure repellat?
            </p>
            <h4 className='py-4 text-teal-600'>Design tools I Use</h4>
            <p className='tex-grey-800 py-1'>Photoshop</p>
            <p className='tex-grey-800 py-1'>Illustrator</p>
            <p className='tex-grey-800 py-1'>C++</p>
            <p className='tex-grey-800 py-1'>Java</p>
            <p className='tex-grey-800 py-1'>Html</p>
            <p className='tex-grey-800 py-1'>Css</p>
            <p className='tex-grey-800 py-1'>Heroku</p>
        </div>
        </div>
    </section>
  )
}

export default Services