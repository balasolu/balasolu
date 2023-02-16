import Head from 'next/head'
import Image from 'next/image'
import { Mulish } from '@next/font/google'

const mulish = Mulish({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center bg-slate-800 p-3">
        <Image
          src="/balasolu.svg"
          alt="balasolu"
          height={256}
          width={256}
          priority
          className="invert"
        />
        <strong className={`${mulish.className} text-slate-400`}>
          we&apos;ll handle the nerd stuff
        </strong>
        <div className="pt-3 text-center">
          <p className={`${mulish.className} text-sm text-slate-200`}>
            North Central Florida
          </p>
          <a
            href="sms:+1(352)234-3458"
            className={`${mulish.className} text-lg text-emerald-500`}
          >
            <strong>(352) 234 3458</strong>
          </a>
        </div>
        <div className="pt-3 text-center">
          <p className={`${mulish.className} text-sm text-slate-200`}>
            Northeast Florida
          </p>
          <a
            href="sms:+1(904)853-0345"
            className={`${mulish.className} text-lg text-emerald-500`}
          >
            <strong>(904) 853 0345</strong>
          </a>
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-3 py-5">
          <div className="flex flex-col text-center">
            <Image
              src="/milkdrunk.png"
              alt="milkdrunk"
              width={96}
              height={96}
              className="rounded-xl"
            />
            <p className="text-slate-200">coming soon!</p>
          </div>
          <a
            href="https://ncflda.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/ncflda.png"
              alt="North Central Florida Driving Academy"
              width={128}
              height={128}
              className="rounded-xl"
            />
          </a>
          <a
            href="https://therightcareer.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/ccs.png"
              alt="Community and Career Solutions"
              width={128}
              height={128}
              className="rounded-xl"
            />
          </a>
          <a
            href="https://noodsplease.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/noodsplease.png"
              alt="noods please."
              width={96}
              height={96}
              className="rounded-xl"
            />
          </a>
        </div>
      </div>
    </>
  )
}
