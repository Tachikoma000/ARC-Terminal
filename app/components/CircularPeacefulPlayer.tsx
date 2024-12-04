import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import useSound from 'use-sound';

const CircularPeacefulPlayer = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // List of audio tracks
  const tracks = [
    '/arc_lofi/track1.mp3',
    '/arc_lofi/track2.mp3',
    '/arc_lofi/track3.mp3',
    '/arc_lofi/track4.mp3'
  ];

  const [play, { pause, stop, duration, sound }] = useSound(tracks[currentTrackIndex], {
    onend: () => {
      // When current track ends, move to next track
      const nextIndex = (currentTrackIndex + 1) % tracks.length;
      setCurrentTrackIndex(nextIndex);
    },
    onplay: () => {
      setIsPlaying(true);
    },
    onpause: () => {
      setIsPlaying(false);
    },
    onstop: () => {
      setIsPlaying(false);
    }
  });

  // Handle track changes
  useEffect(() => {
    if (isPlaying) {
      stop(); // Stop current track
      play(); // Play new track
    }
  }, [currentTrackIndex]);

  const togglePlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-96 h-96 mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full h-full rounded-full bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-lg shadow-lg flex items-center justify-center overflow-hidden"
      >
        {/* Dynamic color orbs */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-48 h-48 rounded-full blur-2xl"
            animate={{
              x: [
                Math.cos((i * 60 + Date.now() / 50) * (Math.PI / 180)) * 80,
                Math.sin((i * 60 + Date.now() / 50) * (Math.PI / 180)) * 80,
                Math.cos((i * 60 + Date.now() / 50) * (Math.PI / 180)) * 80,
              ],
              y: [
                Math.sin((i * 60 + Date.now() / 50) * (Math.PI / 180)) * 80,
                Math.cos((i * 60 + Date.now() / 50) * (Math.PI / 180)) * 80,
                Math.sin((i * 60 + Date.now() / 50) * (Math.PI / 180)) * 80,
              ],
              opacity: isPlaying ? [0.4, 0.6, 0.4] : 0.3,
            }}
            style={{
              background: [
                'rgba(173, 216, 230, 0.7)',
                'rgba(230, 244, 241, 0.7)',
                'rgba(213, 232, 226, 0.7)',
                'rgba(176, 224, 230, 0.7)',
                'rgba(188, 212, 230, 0.7)',
                'rgba(200, 230, 201, 0.7)',
              ][i],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5,
            }}
          />
        ))}

        {/* Play/Pause Button */}
        <motion.button
          onClick={togglePlayPause}
          className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-white/80 shadow-md hover:shadow-lg transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-white/20"
            animate={isPlaying ? {
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {isPlaying ? (
            <Pause className="w-8 h-8 text-gray-600" />
          ) : (
            <Play className="w-8 h-8 text-gray-600 ml-1" />
          )}
        </motion.button>

        {/* Particles */}
        <AnimatePresence>
          {isPlaying && Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              initial={{
                scale: 0,
                x: 0,
                y: 0,
                opacity: 0,
              }}
              animate={{
                scale: [0, 1, 0],
                x: Math.sin(i * 12 * (Math.PI / 180)) * 140,
                y: Math.cos(i * 12 * (Math.PI / 180)) * 140,
                opacity: [0, 0.8, 0],
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                background: `rgba(${173 + Math.random() * 57}, ${216 + Math.random() * 28}, ${230 + Math.random() * 11}, 0.7)`,
              }}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CircularPeacefulPlayer;