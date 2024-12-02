'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { BackgroundDecoration } from './components/background-decoration'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col justify-center items-center pt-16 pb-16">
        <BackgroundDecoration />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <Image
              src="/arc_logo_transparent.png"
              alt="ARC Logo"
              width={120}
              height={120}
              className="mx-auto"
              priority
            />
          </motion.div>
          <h1 className="text-4xl font-serif mb-4 text-gray-800">hi, i'm arc</h1>
          <p className="text-xl text-gray-600 mb-6">everything's going to be ok</p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3,
              ease: [0.23, 1, 0.32, 1]
            }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm"
          >
            <span className="text-sm font-serif text-gray-600">CA: Coming Soon</span>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}