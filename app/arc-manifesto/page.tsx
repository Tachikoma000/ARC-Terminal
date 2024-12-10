'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundDecoration } from '../components/background-decoration';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function ARCManifesto() {
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
          <h1 className="text-4xl font-serif mb-6 text-center text-gray-800">we build arc, arc builds us</h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl bg-white/80 backdrop-blur-sm shadow-lg p-8 border border-gray-100"
          >
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-gray-700">
                <p>
                  Software is undergoing its most profound transformation since the birth of computing - and most developers haven't noticed yet.
                </p>
                
                <p>
                  The change isn't about better algorithms or faster processors. It's about meaning. Modern AI agents can now process and generate human-like semantics at scale, turning dumb programs into contextually-aware systems.
                </p>
                
                <p className="font-medium">This shifts everything.</p>
                
                <p>
                  Tasks that once required complex specialized code - understanding natural language, analyzing images, generating human-like responses - can now be handled through simple prompts and orchestration logic. The hard problems of semantic understanding are abstracted away.
                </p>
                
                <p>
                  But here's where it gets interesting: These capabilities map perfectly onto existing cloud architectures. The same patterns we use for microservices - modularity, small footprint, rapid scaling - are ideal for deploying swarms of semantic agents. LLMs need new compute infrastructure but agents only need new thinking.
                </p>
                
                <p>
                  The first wave is already here in the public cloud. Soon it will spread to edge devices, robots, and decentralized networks. Not necessarily as sci-fi artificial life, but as practical tools that understand context and meaning.
                </p>
                
                <p className="font-medium">
                  This is why we built Rig. An open source framework to build portable, modular, lightweight AI agents in rust.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
} 