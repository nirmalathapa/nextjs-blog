import BlogCard from '@/components/molecules/BlogCard'

import { twclsx } from '@/libs/twclsx'

import { Blog } from 'next-starter-blog'

interface BlogListProps {
  title: string
  blogs: Array<Blog>
  layout?: 'column' | 'row'
  className?: string
  children?: React.ReactNode
}

const BlogList: React.FunctionComponent<BlogListProps> = ({ blogs, children, title, className, layout = 'row' }) => {
  return (
    <section className={className}>
      <h2>{title}</h2>
      {blogs.length > 0 && (
        <ul className={twclsx('grid grid-cols-1 gap-4 flex-auto my-12', layout === 'row' && 'md:grid-cols-2')}>
          {blogs.map((val) => {
            return (
              <li key={val.slug}>
                <BlogCard layout={layout} {...val} />
              </li>
            )
          })}
        </ul>
      )}
      {children}
    </section>
  )
}

export default BlogList
