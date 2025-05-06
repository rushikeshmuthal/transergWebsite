export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    image: string;
  };
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'future-of-web-development',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the cutting-edge technologies and methodologies shaping the future of web development, from AI integration to advanced frameworks.',
    content: `Web development is evolving at an unprecedented pace. In this comprehensive guide, we'll explore the most significant trends that are reshaping how we build and interact with web applications.

    Key areas we'll cover:
    - AI-powered development tools
    - The rise of Edge Computing
    - Web Assembly and its impact
    - New frontend frameworks
    - Performance optimization techniques
    
    Stay ahead of the curve by understanding these emerging technologies and their practical applications in modern web development.`,
    coverImage: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=2000',
    date: '2024-03-15',
    author: {
      name: 'Alex Thompson',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
    },
    tags: ['Web Development', 'Technology', 'Future Trends']
  },
  {
    id: '2',
    slug: 'mastering-nextjs-13',
    title: 'Mastering Next.js 13: Advanced Patterns and Best Practices',
    excerpt: 'Deep dive into Next.js 13 features, exploring advanced patterns, server components, and optimization techniques.',
    content: `Next.js 13 introduces revolutionary features that change how we build React applications. This guide covers advanced patterns and best practices for building scalable applications.

    Topics covered:
    - Server Components architecture
    - Data fetching patterns
    - Route handlers and API routes
    - Performance optimization
    - Deployment strategies`,
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000',
    date: '2024-03-10',
    author: {
      name: 'Sarah Chen',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100'
    },
    tags: ['Next.js', 'React', 'Web Development']
  },
  {
    id: '3',
    slug: 'ai-driven-development',
    title: 'AI-Driven Development: Transforming Software Engineering',
    excerpt: 'How artificial intelligence is revolutionizing software development processes and improving developer productivity.',
    content: `Artificial Intelligence is revolutionizing how we approach software development. From code completion to automated testing, AI tools are becoming indispensable in modern development workflows.

    Learn about:
    - AI-powered code generation
    - Automated code review
    - Intelligent debugging
    - Test automation
    - Future possibilities`,
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000',
    date: '2024-03-05',
    author: {
      name: 'Michael Roberts',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
    },
    tags: ['AI', 'Software Development', 'Technology']
  }
]; 