import { useMemo } from 'react';

export function usePathname(): string {
  if (typeof window === 'undefined') return '/';
  return window.location.pathname;
}

export function useSearchParams(): URLSearchParams {
  if (typeof window === 'undefined') return new URLSearchParams();
  return new URLSearchParams(window.location.search);
}

export function useRouter() {
  return {
    push: (href: string) => {
      window.history.pushState({}, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
    },
    replace: (href: string) => {
      window.history.replaceState({}, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
    },
    back: () => window.history.back(),
    forward: () => window.history.forward(),
    refresh: () => {},
    prefetch: () => {},
  };
}

export function useParams<T = Record<string, string>>(): T {
  if (typeof window === 'undefined') return {} as T;
  const segments = window.location.pathname.split('/').filter(Boolean);
  const slug = segments[segments.length - 1] || '';
  return { slug } as unknown as T;
}
