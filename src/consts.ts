export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'Matheus-Dambrowski',
  DESCRIPTION:
    'Fullstack software engineer',
  EMAIL: 'matheusbd15@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://matheus-dambrowski.dev',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/MatheusBD15', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/matheus-b-dambrowski-b1a9b9203/', label: 'LinkedIn' },
  { href: 'matheusbd15@gmail.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
