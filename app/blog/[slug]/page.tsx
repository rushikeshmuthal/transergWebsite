// app/blog/[slug]/page.tsx

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '../../data/blogData';
import { FaArrowLeft, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPost {
  slug: string;
  title: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    image: string;
  };
  tags: string[];
  content: string;
}

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function getPost(slug: string): Promise<BlogPost | undefined> {
  return blogPosts.find((p) => p.slug === slug);
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <article className="relative mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/#blog"
          className="group mb-8 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          <FaArrowLeft className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to blog
        </Link>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 1536px) 100vw, 1536px"
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-4">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src={post.author.image}
                alt={post.author.name}
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
              <p className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </p>
            </div>
          </div>

          <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900">
            {post.title}
          </h1>

          <div className="mt-8 flex gap-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="prose prose-lg mt-12 max-w-none">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700">
                {paragraph.trim()}
              </p>
            ))}
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="text-sm font-semibold text-gray-900">Share this article</h3>
            <div className="mt-4 flex space-x-6">
              <button className="text-gray-500 hover:text-indigo-600 transition-colors">
                <span className="sr-only">Share on Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </button>
              <button className="text-gray-500 hover:text-indigo-600 transition-colors">
                <span className="sr-only">Share on LinkedIn</span>
                <FaLinkedin className="h-6 w-6" />
              </button>
              <button className="text-gray-500 hover:text-indigo-600 transition-colors">
                <span className="sr-only">Share on Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
