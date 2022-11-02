import { useState,useEffect } from 'react'
import {useTheme} from 'next-themes'
import Link from 'next/link'
import {BsFillMoonStarsFill,BsFillSunFill} from 'react-icons/bs'

const Header = () => {
  const {systemTheme,theme,setTheme} = useTheme()
  const [mounted,setMounted] = useState(false);
  useEffect(()=>{
   setMounted(true)
  },[])
  const renderThemeChanger = () =>{
  if(!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;
  if (currentTheme == 'dark'){
    return (
        <BsFillSunFill className='cursor-pointer text-2xl' onClick={()=> setTheme('light')}/>
    )
  }
  else{
    return(
        <BsFillMoonStarsFill className='cursor-pointer text-2xl dark:text-white' onClick={()=>setTheme('dark')}/>
    )
  }
  }
  return (
    <div>
        <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl dark:text-white'>Portfolio</h1>
            <ul className='flex items-center'>
              <li className='mr-4'>
                  Contacts
              </li>
              <li>
                {renderThemeChanger()}
              </li>
              <li><a href="" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-full ml-8'>Resume</a></li>
            </ul>
          </nav>
    </div>
  )
}

export default Header