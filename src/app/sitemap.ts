import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/posts';

const baseUrl = 'https://buku-web.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/nosotros`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ViabilidadesAmbientales`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/salud`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/certificaciones`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/contacto`, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const posts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticRoutes, ...posts];
}
