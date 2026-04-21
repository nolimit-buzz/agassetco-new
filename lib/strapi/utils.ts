import type { StrapiRichText } from './types';

export function richTextToPlain(nodes: StrapiRichText | undefined | null): string {
  if (!nodes?.length) return '';
  return nodes
    .map(node => node.children.map(child => child.text).join(''))
    .filter(Boolean)
    .join(' ')
    .trim();
}

export function richTextToLines(nodes: StrapiRichText | undefined | null): string[] {
  if (!nodes?.length) return [];
  return nodes
    .map(node => node.children.map(child => child.text).join(''))
    .filter(Boolean);
}

export function strapiMediaUrl(path: string | null | undefined): string {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `${process.env.NEXT_PUBLIC_MEDIA_URL ?? ''}${path}`;
}
