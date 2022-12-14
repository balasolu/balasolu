import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Balanced Solutions Software, Inc.</title>
        <meta name="description" content="we'll handle the nerd stuff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-center items-center h-screen w-screen">
        <Image
          src="/balasolu.svg"
          alt="balasolu"
          height={256}
          width={256}
          priority
          className="invert" />
          <p className={`${inter.className} text-slate-400`}>we&apos;ll handle the nerd stuff</p>
          <a href="sms:+1(352)234-3458" className={`${inter.className} text-amber-400`}><strong>+1 (352) 234 3458</strong></a>
      </div>
    </>
  )
}
