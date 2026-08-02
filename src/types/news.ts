export interface SanitySlug {
  current: string;
}

export interface SanityImage {
  asset?: {
    _ref?: string;
    _type?: string;
  };
  [key: string]: unknown;
}

export interface Category {
  _id: string;
  name: string;
  title: string;
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
  mainImage: SanityImage | null;
  mainImageCaption?: string;
  mainImageUrl: string | null;
  mainImageAlt: string;
  publishedAt: string;
  category: Category | null;
  content?: PortableTextBlock[];
  videoLink?: string;
  views?: number;
}