'use client'

import { redirect } from 'next/navigation'
import { Roboto } from 'next/font/google';
import Script from 'next/script';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function ContactUsPage() {

  const handleButtonClick = () => {
    redirect('/home'); 
  };

  return (
    <div>
      <Script src="script.js" strategy="worker"/>
      <h1 className={roboto.className}>HALLO THIS IS CONTACT US PAGE!!!</h1>
      <button onClick={handleButtonClick}>Go to Home Page</button> 
    </div>
  );
}