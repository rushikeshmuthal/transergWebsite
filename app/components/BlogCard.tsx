'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BlogPost } from '../data/blogData';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-white">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={false}
          />
        </div>

        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <div className="flex gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h3 className="mt-4 text-xl font-semibold leading-tight text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
              {post.title}
            </h3>
            
            <p className="mt-3 line-clamp-2 text-sm text-gray-600">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {post.author.name}
              </span>
            </div>
            <span className="text-sm text-gray-500">
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>

          <Link href={`/blog/${post.slug}`} className="absolute inset-0">
            <span className="sr-only">Read more about {post.title}</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 