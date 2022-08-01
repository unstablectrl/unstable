import dynamic from 'next/dynamic'
import Head from 'next/head'

import Animation3d from '../components/Animation3d'
import AspectRatioBox from '../components/AspectRatioBox'
import Terminal from '../components/Terminal'

const Eyes = dynamic(() => import('../components/eyes'), { ssr: false })

export default function Home() {
  return (
    <>
      <Head>
        <title>I&apos;m Unstable!</title>
        <meta name="description" content="I'm Unstable" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full bg-fuchsia-100 dark:bg-gray-800 text-gray-50 grid place-items-center px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-2xl w-full">
          <div className="h-screen grid place-items-center">
            <Eyes />
          </div>
          <div className="h-screen grid place-items-center">
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
