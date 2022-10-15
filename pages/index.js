import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai';
import Image from "next/image";
import deved from "../public/dev-ed-wave.png"
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"
import {useState} from 'react';

export default function Home() {
  const [darkMode,setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark":""}>
      <Head>
      <title>Avnish Kumar Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl dark:text-white'>Developed</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl dark:text-white' onClick={()=>setDarkMode(!darkMode)}/>
              </li>
              <li><a href="" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10 dark:text-white'>
            <h2 className='text-5xl py-2 text-teal-600 front-medium md:text-7xl'>Avnish Kumar</h2>
            <h3 className='text-2xl py-2 md:text-2xl'>Software Engineer &amp; Web Developer</h3>
            <p className='text-md py-5 leading-8 text-grey-800 md:text-xl max-w-xl mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti explicabo vel aliquam at, excepturi iure impedit! Rerum quos quisquam vero veritatis nemo totam earum doloremque laboriosam velit, dolorem rem mollitia?</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-grey-600 dark:text-white'>
            <AiFillLinkedin/>
            <AiFillTwitterCircle/>
            <AiFillYoutube/>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image src={deved} layout="fill" objectFit='cover'/>
          </div>
        </section>
        {/*  */}
        <section>
          <div className='dark:text-white'>
            <h3 className='text-3xl py-1 dark:text-cyan-500'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-grey-800'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius culpa deserunt officia earum amet, dolor quam facilis, vitae natus quos cumque magnam maiores quo voluptas quod tempora accusamus? Veritatis, laudantium.</p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
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
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
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
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
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
        <section>
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
