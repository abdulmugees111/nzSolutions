import {siteConfig} from '@/constants/site';

export function createPageTitle(title: string) {
  return `${title} | ${siteConfig.name}`;
}

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path}`;
}
