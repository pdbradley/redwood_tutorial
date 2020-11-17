import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'
import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <BlogLayout>
      <BlogPostsCell />
    </BlogLayout>
  )
}

export default HomePage
