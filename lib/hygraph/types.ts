export interface PostSummary {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt: string;
  coverImage?: {
    url: string;
  };
}

export interface PostDetail extends PostSummary {
  content: {
    html: string;
  };
  icon?: {
    url: string;
  };
}

export interface Page {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  content: {
    html: string;
  };
  icon?: {
    url: string;
  };
  coverImage?: {
    url: string;
  };
  publishedAt: string;
}

export interface Platform {
  id: string;
  featureGroup: string;
  h1: string;
}

export interface UserPainPoint {
  id: string;
  heading: string;
  text: string;
  image?: {
    url: string;
    width?: number;
    height?: number;
  };
}