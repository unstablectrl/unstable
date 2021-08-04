import Head from 'next/head'

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

      <main className="h-screen bg-gray-800 text-gray-50 grid place-items-center">
        <div style={{ width: '600px' }}>
          <AspectRatioBox aspectRatio={5 / 3}>
            <Terminal className="h-full" />
          </AspectRatioBox>
        </div>
      </main>
    </>
  )
}
