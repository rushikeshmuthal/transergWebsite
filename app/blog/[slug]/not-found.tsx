'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Blog Post Not Found</h2>
        <p className="mt-4 text-lg text-gray-400">
          Sorry, we couldn't find the blog post you're looking for.
        </p>
        <Link
          href="/#blog"
          className="mt-8 inline-flex items-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Return to Blog
        </Link>
      </motion.div>
    </div>
  );
} 