import React from 'react'
import { useRouter } from 'next/router'

const BlogMain = () => {
  const router = useRouter()

  return (
    <div>This is blog page #{router.query.blogId}</div>
  )
}

export default BlogMain