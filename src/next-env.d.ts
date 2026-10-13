declare module 'next' {
  export interface Metadata {
    metadataBase?: URL;
    title?: string | { default: string; template: string };
    description?: string;
    keywords?: string[];
    authors?: Array<{ name: string; url?: string }>;
    creator?: string;
    publisher?: string;
    formatDetection?: Record<string, boolean>;
    alternates?: {
      canonical?: string;
      languages?: Record<string, string>;
    };
    robots?: {
      index?: boolean;
      follow?: boolean;
      googleBot?: Record<string, unknown>;
    };
    openGraph?: {
      title?: string;
      description?: string;
      url?: string;
      siteName?: string;
      locale?: string;
      type?: string;
      images?: Array<string | { url: string; width?: number; height?: number; alt?: string }>;
    };
    twitter?: {
      card?: string;
      title?: string;
      description?: string;
      images?: Array<string | { url: string; width?: number; height?: number; alt?: string }>;
    };
    [key: string]: unknown;
  }
}

declare module 'next/navigation' {
  export function usePathname(): string;
  export function useSearchParams(): URLSearchParams;
  export function useRouter(): {
    push: (href: string) => void;
    replace: (href: string) => void;
    back: () => void;
    forward: () => void;
    refresh: () => void;
    prefetch: (href: string) => void;
  };
  export function useParams<T = Record<string, string>>(): T;
}
