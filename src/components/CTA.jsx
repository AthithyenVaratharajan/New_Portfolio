import React from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../constants';

const CTA = () => {
  return (
    <section className='relative bg-gradient-to-br from-primary to-secondary p-8 rounded-lg shadow-card text-center text-white overflow-hidden'>
      <p className='text-2xl font-extrabold mb-4 leading-tight'>
        Need a Software Engineer? <br className='xs:block hidden' />
        Let&apos;s talk!
        
      </p>
      <div className='mt-16 flex flex-wrap gap-12'>
      {socialLinks.map((socialLink) => (
        <div className='block-container w-20 h-20'>
        <div className='btn-back rounded-xl'/>
          <div className='btn-front rounded-xl flex justify-center items-center'>
            <a href={socialLink.link}>
              <img
            
              src={socialLink.iconUrl}
              alt = {socialLink.name}
              className='w-1/2 h-1/2 object-contain'
            />
            </a>
            
            
          </div>
          
        </div>
        
      ))}
      </div>
    </section>
  );
}

export default CTA;
