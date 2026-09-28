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
    label: 'TikTok',
    href: 'https://www.tiktok.com/@tanaerosenberg',
    icon: 'tiktok',
  },
  {
    label: 'Google',
    href: 'https://www.google.com/maps?cid=1328461908822745393',
    icon: 'google',
  },
]
