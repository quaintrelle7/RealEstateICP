import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar/Navbar'
import HomePage from '@/components/Home/HomePage'


export default function Home() {
  return (
    <>
     <Navbar/>
     <HomePage/>
    </>
  )
}
