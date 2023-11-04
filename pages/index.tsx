import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { BackgroundImage1, BackgroundImage2, FooterContainer, FooterLink, GenerateQuoteButton, GenerateQuoteButtonText, GradientBackgroundCon, QuoteGeneratorCon, QuoteGeneratorInnerCon, QuoteGeneratorSubTitle, QuoteGeneratorTitle } from '@/components/QuoteGenerator/QuoteGeneratorElements'
import Clouds1 from '../assets/Clouds1.png'
import Clouds2 from '../assets/thunderbolt-cloud.png'
import { useState } from 'react'

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);
  return (
    <>
      <Head>
        <title>Quote genearator</title>
        <meta name="description" content="Hobby project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GradientBackgroundCon>

      <QuoteGeneratorCon>
        <QuoteGeneratorInnerCon>
          <QuoteGeneratorTitle>
            Daily Inspiration Generator
          </QuoteGeneratorTitle>
            <QuoteGeneratorSubTitle>
            Looking for a splash of inspiration? Generate a quote card with a random inspirational quote provided by
             <FooterLink href="https://zenquotes.io/" target="_blank" rel="nooper"> ZenQuotes API

             </FooterLink>
            </QuoteGeneratorSubTitle>

            <GenerateQuoteButton>
              <GenerateQuoteButtonText onClick={null}>
                  make a Quote
              </GenerateQuoteButtonText>
            </GenerateQuoteButton>
        </QuoteGeneratorInnerCon>
      </QuoteGeneratorCon>



        {/* Background images*/}
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

        {/* Footer */}
         <FooterContainer>
          <>
            Quotes Generated : {numberOfQuotes}
            <br />
            Develope by me 
          </>
         </FooterContainer>

      </GradientBackgroundCon>
    </>
  )
}
