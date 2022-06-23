import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import clsx from 'clsx';

const LINEUP = {
  friday: {
    start: '10pm',
    pre: '641 Ossington Ave',
    main: 'Biscits',
    venue: 'ToyBox',
    link: 'https://www.torontoclubs.com/events/biscits-at-toybox-toronto',
    after: 'Wiggle Room'
  },
  saturday: {
    start: '12pm',
    pre: 'Bottomless Mimosas @The Pint',
    main: 'Maria Garcia & The Chiquititas',
    venue: 'Woodbine Beach',
    link: 'https://thepintto.com/_s/menu/The-Pint-Brunch.pdf',
    after: 'TBD'
  },
  sunday: {
    start: '1pm',
    pre: '25 Lascelles Ave',
    main: 'Kaskade',
    venue: 'Cabana',
    link: 'https://cabanapoolbar.com/event/kaskade/',
    after: 'TBD'
  }
}

const LineupItem = ({selected}) => {
  const selection = LINEUP[selected]
  return (
  <ul className='text-center my-20 border-2 border-black lg:w-1/2 mx-auto py-5'>
    <li className='mb-3'>
      <span className='text-xl'>Start Time</span>
      <h5 className='text-3xl font-bold uppercase'>{selection.start}</h5>
    </li>
    <li className='mb-3'>
      <span className='text-xl'>Pre Party @</span>
      <h5 className='text-3xl font-bold uppercase'>{selection.pre}</h5>
    </li>
    <li className='mb-3'>
      <span className='text-xl'>Performer</span>
      <h5 className='text-3xl font-bold uppercase'>{selection.main}</h5>
    </li>
    <li className='mb-3'>
      <span className='text-xl'>Venue</span>
      <h5 className='text-3xl font-bold uppercase'>{selection.venue}</h5>
    </li>
    <li>
      <span className='text-xl'>After Party @</span>
      <h5 className='text-3xl font-bold uppercase'>{selection.after}</h5>
    </li>
  </ul>
  )
}

export default function Home() {
  const CurrentYear = new Date().getFullYear()

  const [selection, setSelection] = useState("friday")

  return (
    <div className="">
      <Head>
        <title>MiaRob Fest</title>
        <meta name="description" content="World's greatest 3-day fun festival" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
      <div className='hero h-screen mb-20'>
          <div className="fullscreen-bg">
              <video autoPlay muted playsInline loop id="hero-video" className="fullscreen-bg__video">
                  <source src="/bg-video-fest.mp4" type="video/mp4"/>
              </video>
          </div>
          <div className='flex flex-col content-center justify-center h-full hero-background'>
            <div className='container flex flex-col content-center z-10'>
              <h1 className="text-6xl text-center font-black mb-10 text-white uppercase">
                Welcome to <br/><span className="text-blue-300">MiaRob Fest </span>2022
              </h1>
              <div className='flex flex-col lg:flex-row gap-10 lg:w-1/2 mx-auto'>
                <a href="#access" className="btn flex-1">Get Early Access</a>
                <a href="#lineup" className='btn flex-1'>Lineup</a>
              </div>
            </div>
          </div>
      </div>

      <div id='access' className='container my-20 text-center lg:h-screen lg:flex flex-col justify-center'>
        <div className='border-black border-2 p-10'>
          <h2 className='text-5xl font-bold mb-10 underline'>Early Access Pass</h2>
          <h3 className='text-8xl font-bold uppercase mb-10'>Sold Out!</h3>
          <p className='text-xl lg:w-1/2 mx-auto'>We are offically sold out of 2022 passes! <br/>Thank you all for the support. <br/>Please check our resale partners for tickets</p>
        </div>
      </div>

      <div className='lineup container mb-20 lg:h-screen lg:flex flex-col justify-center' id="lineup">
        <h2 className='text-5xl font-bold mb-20 underline text-center'>Official 2022 Lineup</h2>
        <nav className='flex flex-col lg:flex-row gap-5' >
          <div onClick={()=>setSelection("friday")} className={clsx(selection === 'friday' && 'bg-blue-500 text-white', 'cursor-pointer flex-1 uppercase text-center p-2 text-xl font-bold border-black border-2 hover:bg-blue-500 hover:text-white')}>Friday</div>
          <div onClick={()=>setSelection("saturday")} className={clsx(selection === 'saturday' && 'bg-blue-500 text-white', 'cursor-pointer flex-1 uppercase text-center p-2 text-xl font-bold border-black border-2 hover:bg-blue-500 hover:text-white')}>Saturday</div>
          <div onClick={()=>setSelection("sunday")}className={clsx(selection === 'sunday' && 'bg-blue-500 text-white', 'cursor-pointer flex-1 uppercase text-center p-2 text-xl font-bold border-black border-2 hover:bg-blue-500 hover:text-white')}>Sunday</div>
        </nav>
        <div>
          <LineupItem selected={selection}/>
        </div>
      </div>

      </main>

      <footer className={styles.footer}>
        &#169; MiaRob Fest {CurrentYear}
      </footer>
    </div>
  )
}
