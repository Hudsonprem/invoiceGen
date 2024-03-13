import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import StepComponent from '@/components/forms/StepContainer'
import {LayoutComponent} from "../components/layout/Layout"

export default function Home() {
  return (
    <>
      <Head>
        <title>Invoice Gen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
      <LayoutComponent>
        <StepComponent />
      </LayoutComponent>
      </main>
    </>
  )
}