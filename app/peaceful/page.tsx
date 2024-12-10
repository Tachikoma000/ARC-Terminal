'use client'

import { motion } from 'framer-motion'
import { BackgroundDecoration } from '../components/background-decoration'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import CircularPeacefulPlayer from '../components/CircularPeacefulPlayer'
import PeacefulChat from '../components/PeacefulChat'

export default function PeacefulPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-start relative overflow-hidden pt-20 pb-12">
        <BackgroundDecoration />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-10 w-full max-w-4xl mx-auto px-4"
        >
          <h1 className="text-4xl font-serif mb-6 text-center text-gray-800">arc oasis</h1>
          <p className="text-xl font-serif text-gray-600 leading-relaxed mb-12 text-center">
            breathe, listen, and connect to infinite music created by arc
          </p>
          
          <div className="space-y-12">
            <CircularPeacefulPlayer />
            <PeacefulChat />
          </div>
        </motion.div>
      </main>
    </div>
  )
}