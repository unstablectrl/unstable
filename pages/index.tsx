import Head from 'next/head'

import Animation3d from '../components/Animation3d'
import AspectRatioBox from '../components/AspectRatioBox'
import Terminal from '../components/Terminal'

export default function Home() {
  return (
    <>
      <Head>
        <title>I&apos;m Unstable!</title>
        <meta name="description" content="I'm Unstable" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen bg-fuchsia-100 bg- dark:bg-gray-800 text-gray-50 grid place-items-center px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-2xl w-full">
          <Animation3d>
            <AspectRatioBox aspectRatio={5 / 3}>
              <Terminal className="h-full" />
            </AspectRatioBox>
          </Animation3d>
        </div>
      </main>
    </>
  )
}
