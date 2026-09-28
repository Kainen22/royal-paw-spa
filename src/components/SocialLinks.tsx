import { Icon } from '@/components/Icon'
import { socialLinks, type SocialLink } from '@/lib/socials'

type SocialLinksProps = {
  className?: string
  labeled?: boolean
  links?: SocialLink[]
}

export function SocialLinks({
  className = '',
  labeled = false,
  links = socialLinks,
}: SocialLinksProps) {
  return (
    <nav className={`social-links ${className}`.trim()} aria-label="Social media">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={labeled ? 'social-link is-labeled' : 'social-link'}
          aria-label={link.label}
        >
          <Icon name={link.icon} size={18} />
          {labeled ? <span>{link.label}</span> : null}
        </a>
      ))}
    </nav>
  )
}
