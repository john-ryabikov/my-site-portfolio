"use client"

import { motion } from "framer-motion"

export default function SectionAnimated({ children, classSection }) {
  return (
      <motion.section 
        className={classSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
        {children}
      </motion.section>
  )
}
