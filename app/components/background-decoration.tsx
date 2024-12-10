import { motion } from 'framer-motion'

export function BackgroundDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
            fill="rgba(230, 244, 241, 0.5)"
            initial={{ d: "M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" }}
            animate={{ d: "M0,60 Q25,40 50,60 T100,60 L100,100 L0,100 Z" }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 10, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,70 Q25,50 50,70 T100,70 L100,100 L0,100 Z"
            fill="rgba(213, 232, 226, 0.5)"
            initial={{ d: "M0,70 Q25,50 50,70 T100,70 L100,100 L0,100 Z" }}
            animate={{ d: "M0,80 Q25,60 50,80 T100,80 L100,100 L0,100 Z" }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 8, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M100,0 C80,20 20,20 0,0 S20,40 50,40 S80,60 100,60"
            fill="none"
            stroke="rgba(173, 216, 230, 0.3)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          <motion.path
            d="M100,20 C80,40 20,40 0,20 S20,60 50,60 S80,80 100,80"
            fill="none"
            stroke="rgba(173, 216, 230, 0.2)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </div>
  )
}