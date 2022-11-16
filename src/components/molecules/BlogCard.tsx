import { twclsx } from '@/libs/twclsx'

import { Blog } from 'next-starter-blog'
import Link from 'next/link'

interface BlogCardProps extends Blog {
  slug: string
  layout: 'row' | 'column'
}

const BlogCard: React.FunctionComponent<BlogCardProps> = ({ slug, title, summary, layout = 'row' }) => {
  console.log({ title }, 'tt')
  return (
    <Link
      className={twclsx(
        'flex flex-col p-4 w-full h-full',
        'border rounded-lg transition',
        'border-main-2 dark:border-main-3',
        'hover:border-main-4 dark:hover:border-main-2'
      )}
      href={`/blog/${slug}`}
    >
      <h3>{title}</h3>
      {layout === 'column' && <p className='mt-[0.675em]'>{summary}</p>}
    </Link>
  )
}

export default BlogCard
