"use client"

import { motion } from "framer-motion"

export default function FooterAnimated({ children, classFooter }) {
  return (
      <motion.footer 
        className={classFooter}
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{ delay: 1.25 }}
      >
        {children}
      </motion.footer>
  )
}
