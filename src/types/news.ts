export interface SanitySlug {
  current: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: SanitySlug;
  slugCurrent?: string;
}

export interface PortableTextBlock {
  _type: string;
  _key: string;
  [key: string]: unknown;
}

export interface Post {
  _id: string;
  title: string;
  slug: SanitySlug;
  mainImage: string | null;
  mainImageCaption?: string;
  mainImageUrl: string | null;
  mainImageAlt: string;
  publishedAt: string;
  category: Category | null;
  content?: PortableTextBlock[];
  views?: number;
}