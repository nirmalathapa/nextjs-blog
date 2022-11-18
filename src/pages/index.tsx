import BlogList from '@/components/organism/BlogList'
import HeroWithPhoto from '@/components/template/HeroWithPhoto'
import Layout from '@/components/template/Layout'

import { getBlog, ownerName } from '@/helpers'
import { twclsx } from '@/libs/twclsx'

import { ArrowSmRightIcon } from '@heroicons/react/outline'
import type { GetStaticProps, NextPage } from 'next'
import { Blog } from 'next-starter-blog'
import Link from 'next/link'

interface HomeProps {
  blogs: Array<Blog>
}

const Home: NextPage<HomeProps> = ({ blogs = [] }) => {
  const meta = {
    title: ownerName,
    template: 'Personal Blog',
    description: `Hello I'm ${
      ownerName.split(' ')[0]
    }, UX'er partly & a Developer. I am passionate about creating meaningful and inclusive digital products. Currently, working as a Creative Technologist at Nordea. Orginally from Nepal however Copenhagen is my home now 😊`,
    openGraph: {
      images: [
        {
          url: 'https://og-image.vercel.app/**NEXT.js%20Starter%20Blog**%3Cbr%20%2F%3EStarter%20blog%20with%20MDX%2C%20Tailwind%20CSS%2C%20and%20TypeScript..png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-bw-logo.svg',
          alt: 'NEXT.js Starter Blog',
          width: 1200,
          height: 600
        }
      ]
    }
  }

  return (
    <Layout as='main' {...meta}>
      <HeroWithPhoto image='/static/avatar.jpg' imageAlt={ownerName} {...meta}>
        <br />
        <p className={twclsx('max-w-prose mt-2 font-medium')}>
          I like reading in general anything that spikes my interest. Mostly, about technologies, science, philosphy,
          psychology, history, arts and all about the universe. And I like to question everything. However, this is a
          blog about my learnings especially with UX design and coding.
        </p>
      </HeroWithPhoto>

      <BlogList blogs={blogs} title='Blog Post'>
        <Link
          href='/blog'
          className={twclsx(
            'group',
            'items-center space-x-1 font-medium',
            'hover:text-primary-4 dark:hover:text-primary-2 hover:underline'
          )}
        >
          <span>See all post</span>
          <ArrowSmRightIcon
            className={twclsx(
              'inline-flex w-4 h-4 transition-all duration-200',
              '-translate-x-4 group-hover:translate-x-0',
              'opacity-0 group-hover:opacity-100'
            )}
          />
        </Link>
      </BlogList>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await getBlog()

  return {
    props: {
      blogs: blogs.map((b) => ({ ...b.data, slug: b.slug })).filter((b) => b.featured)
    }
  }
}

export default Home
