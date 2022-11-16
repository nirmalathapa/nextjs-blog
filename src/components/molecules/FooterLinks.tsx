import { AppRoute } from '@/constant/route'
import { SocialMediaProps } from '@/constant/socialMedia'
import { twclsx } from '@/libs/twclsx'

import Link from 'next/link'

interface FooterLinkProps<T = SocialMediaProps | AppRoute> {
  data: Array<T>
}

const FooterLinks: React.FunctionComponent<FooterLinkProps> = ({ data }) => {
  return (
    <div className={twclsx('flex flex-col gap-2 w-full')}>
      {data.map((val) => (
        <Link
          className={twclsx(
            'max-w-max transition text-sm md:text-base',
            'hover:text-primary-4 dark:hover:text-primary-2'
          )}
          key={val.href}
          href={val.href}
        >
          {val.children}
        </Link>
      ))}
    </div>
  )
}

export default FooterLinks
