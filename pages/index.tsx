import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useTheme } from 'next-themes'
import { FC } from 'react'

import Animation3d from '../components/Animation3d'
import AspectRatioBox from '../components/AspectRatioBox'
import Terminal from '../components/Terminal'
import Eyes from './eyes'

const ThemeButton = dynamic(() => import('./ThemeButton'), { ssr: false })

export default function Home() {
  return (
    <>
      <Head>
        <title>I&apos;m Unstable!</title>
        <meta name="description" content="I'm Unstable" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute top-0 left-0 right-0 bg-gray-900">
        <div className="flex justify-end p-4">
          <ThemeButton />
        </div>
      </div>
      <main className="h-full bg-fuchsia-100 dark:bg-gray-800 text-gray-50 grid place-items-center px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-2xl w-full">
          <div className="h-screen grid place-items-center">
            <Eyes />
          </div>
          <div className="h-screen ">
            <div className="max-w-2xl w-full">
              <Animation3d>
                <AspectRatioBox aspectRatio={5 / 3}>
                  <Terminal className="h-full" />
                </AspectRatioBox>
              </Animation3d>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
