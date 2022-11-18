import { APP_ROUTE } from '@/constant/route'
import { twclsx } from '@/libs/twclsx'

import Link from 'next/link'
import { useRouter } from 'next/router'

const Nav = () => {
  const { pathname } = useRouter()

  return (
    <nav className={twclsx('md:flex items-center space-x-4', 'hidden')}>
      {APP_ROUTE.map((item, id) => {
        return (
          <Link
            key={id}
            href={item.href}
            className={twclsx(
              'px-5 text-lg py-2 transition font-semibold rounded-sm bg-gradient-to-tr focus:outline-none focus:ring focus:ring-violet-300',
              pathname === item.href
                ? 'text-main-1 dark:text-primary-2 from-primary-3 to-secondary-3 dark:bg-none'
                : 'text-main-4 dark:text-main-1 hover:bg-violet-600 hover:text-main-1 dark:hover:bg-none dark:hover:text-main-1'
            )}
          >
            {item.children}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
