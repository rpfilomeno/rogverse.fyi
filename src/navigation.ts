import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [

    {
      text: 'Pages',
      links: [
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },

  ],
  actions: [{ text: 'Book a Meeting', href: 'https://calendly.com/rogverse/30min', target: '_blank' }],
};

export const footerData = {
  links: [
    { text: 'Blog', href: 'https://blog.rogverse.fyi' },
    { text: 'About', href: getPermalink('/about') },
    
  ],
  secondaryLinks: [
    { text: 'Contact', href: getPermalink('/contact') },
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/godie' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/rpfilomeno' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://rogverse.fyi/favicon/favicon-32x32.png" alt="ROGVERSE logo" loading="lazy"></img>
    Built with <a class="text-blue-600 underline dark:text-muted" href="https://github.com/withastro/astro"> Astrowind</a> · ROGVERSE · All rights reserved.
  `,
};
