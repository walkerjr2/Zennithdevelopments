'use client';

import { motion } from 'framer-motion';
import { Wrench, Clock, Mail, Phone } from 'lucide-react';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0a2463] to-[#0a0a0a] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-[#00d9ff] rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#0a2463] rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            className="inline-flex items-center justify-center mb-8"
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#00d9ff] blur-xl opacity-50"></div>
              <Wrench className="w-20 h-20 text-[#00d9ff] relative" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#00d9ff] to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Under Maintenance
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We're currently performing scheduled maintenance
          </motion.p>

          {/* Description */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-[#00d9ff]" />
              <h2 className="text-xl font-semibold text-white">Expected Downtime</h2>
            </div>
            <p className="text-gray-300 text-lg mb-4">
              We're making improvements to serve you better
            </p>
            <p className="text-gray-400">
              Our team is working hard to bring the site back online as soon as possible.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-gray-400 mb-6">
              Need immediate assistance? Reach out to us:
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Email */}
              <motion.a
                href="mailto:zennithdevelopments@gmail.com"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00d9ff]/50 rounded-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 text-[#00d9ff]" />
                <span className="text-white group-hover:text-[#00d9ff] transition-colors">
                  Email Us
                </span>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:8768396403"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00d9ff]/50 rounded-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 text-[#00d9ff]" />
                <span className="text-white group-hover:text-[#00d9ff] transition-colors">
                  Call Us
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* Status indicator */}
          <motion.div
            className="mt-12 inline-flex items-center gap-2 px-4 py-2 bg-[#00d9ff]/10 border border-[#00d9ff]/30 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div
              className="w-2 h-2 bg-[#00d9ff] rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span className="text-sm text-[#00d9ff]">System Maintenance in Progress</span>
          </motion.div>

          {/* Footer text */}
          <motion.p
            className="mt-8 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Thank you for your patience
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
