import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { BackgroundImage1, BackgroundImage2, GradientBackgroundCon } from '@/components/QuoteGenerator/QuoteGeneratorElements'
import Clouds1 from '../assets/Clouds1.png'
import Clouds2 from '../assets/thunderbolt-cloud.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Quote genearator</title>
        <meta name="description" content="Hobby project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GradientBackgroundCon>

        <BackgroundImage1
        src={Clouds1} 
        height="300"
        alt="cloudbackground1"
         />

       <BackgroundImage2
        src={Clouds2} 
        height="300"
        alt="cloudbackground2"
         />

      </GradientBackgroundCon>
    </>
  )
}
