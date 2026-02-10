"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* glow ambiente suave */}
        <motion.div
          className="absolute -inset-48 bg-electric/10 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            {/* LOGO 250% MAIOR */}
            <motion.div
              className="
                relative
                w-80 h-80
                md:w-[25rem] md:h-[25rem]
                mx-auto mb-14
              "
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              {/* glow leve sem fundo sólido */}
              <div className="absolute -inset-14 rounded-full bg-electric/20 blur-3xl animate-pulse" />

              <Image
                src="/logo.png"
                alt="Faunos Eméritos"
                width={400}
                height={400}
                className="mx-auto h-full w-full object-contain bg-transparent"
                priority
              />
            </motion.div>

            <motion.h1
              className="font-display text-4xl md:text-6xl font-bold gradient-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Faunos Eméritos
            </motion.h1>

            <motion.p
              className="text-ice/60 text-lg md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Especialistas em Remodelações
            </motion.p>

            <motion.div
              className="mt-10 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="spinner" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
