import Head from 'next/head'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai';
import Image from "next/image";
import deved from "../public/dev-ed-wave.png"
import Header from '../components/Header';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
export default function Home() {

  return (
    <div>
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
          <Header/>
          <div className='text-center p-10 dark:text-white'>
            <h2 className='uppercase text-5xl py-2 text-teal-600 front-medium md:text-7xl'>Avnish Kumar</h2>
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
        {/* Services  */}
        <Services/>
        <Portfolio/>
      </main>
    </div>
  )
}
