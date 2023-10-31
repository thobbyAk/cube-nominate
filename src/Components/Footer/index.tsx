import React from 'react';
import DesktopLogo from "../../Assets/images/big-logo.png"
import { FacebookIcon, InstagramIcon, LinkedInIcon, Twittercon, YoutubeIcon } from '../../Assets/Icons';

const Footer: React.FC = () => {
  return (
    <div className="bg-black text-white md:h-64 h-[34rem] py-4">
      <div className="md:px-32 px-8 py-8">
        <div className="flex justify-center md:justify-start">
        <img src={DesktopLogo} alt="logo"  />
        </div>
        <div className="w-full h-0.5 my-4 bg-customGrey-200">
        <div className="flex md:justify-between md:flex-row mb-4 flex-col py-5">
        <div className="grid md:grid-cols-6 grid-cols-1  gap-4">
        <div className='flex flex-col'>
            <div className='uppercase font-poppins text-xs font-bold'>Bournemouth</div>
            <div className='uppercase font-anonpro text-xs '>Telephone House <br />
        Bournemouth, BH1 3NE</div>
          
        </div>
        <div className='flex flex-col'>
            <div className='uppercase font-poppins text-xs font-bold'>London</div>
            <div className='uppercase font-anonpro text-xs '>51 Eastcheap <br />
        London, EC3M 1JP</div>
          
        </div>
        <div className='flex flex-col'>
            <div className='uppercase font-poppins text-xs font-bold'>Washington</div>
            <div className='uppercase font-anonpro text-xs '>80 M Street SE <br />
        Washington, D.C 20003</div>
          
        </div>
        <div className='flex flex-col'>
            <div className='uppercase font-poppins text-xs font-bold'>Washington</div>
            <div className='uppercase font-anonpro text-xs '>7901 4th St N, STE 300 <br />
            St. Petersburg FL 33702</div>
          
        </div>      
        
        </div>
        <div className="social md:mt-0 mt-8">
            <div className="text-white font-bold font-poppins uppercase text-xs mb-2">GET SOCIAL</div>
            <div className="flex flex-row gap-4">
                <Twittercon/>
                <InstagramIcon/>
                <FacebookIcon/>
                <LinkedInIcon/>
                <YoutubeIcon/>
            </div>
        </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row">
            <div className='font-anonpro text-center text-xs font-bold'>© 2023 3 Sided Cube</div>
            <div className='font-anonpro text-center text-xs font-bold'>Let’s Build Tech For Good</div>
        </div>
     

        </div>
     
    

      </div>
    </div>
  );
};

export default Footer;
