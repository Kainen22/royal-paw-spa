import type { IconName } from '@/components/Icon'

export type SocialLink = {
  label: string
  href: string
  icon: IconName
}

export const socialLinks: SocialLink[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/royalpawspa',
    icon: 'instagram',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61555486191595',
    icon: 'facebook',
  },
  {
    label: 'Google',
    href: 'https://www.google.com/search?q=Royal+Paw+Spa',
    icon: 'google',
  },
]
