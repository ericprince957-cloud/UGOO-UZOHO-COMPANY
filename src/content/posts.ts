export type PostBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'list'; items: string[] };

export interface Post {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  body: PostBlock[];
}

/**
 * HOW TO PUBLISH A NEW ARTICLE
 *
 * 1. Add an object to the array below:
 *
 *    {
 *      slug: 'tenancy-rights-in-rivers-state',   // used in the URL: /blog/tenancy-rights-in-rivers-state
 *      title: 'Understanding Tenancy Rights in Rivers State',
 *      date: '2026-10-25',
 *      excerpt: 'A short summary shown on the Insights page and in search results.',
 *      body: [
 *        { type: 'p', text: 'Opening paragraph...' },
 *        { type: 'h2', text: 'A Section Heading' },
 *        { type: 'p', text: 'Text under the heading...' },
 *        { type: 'h3', text: 'A Sub-heading' },
 *        { type: 'list', items: ['Point one', 'Point two'] },
 *      ],
 *    }
 *
 * 2. Commit and push. Vercel deploys automatically and the article is live.
 *
 * The newest article (highest date) is shown first.
 */
export const posts: Post[] = [];

export const getPostBySlug = (slug: string) => posts.find((p) => p.slug === slug);
