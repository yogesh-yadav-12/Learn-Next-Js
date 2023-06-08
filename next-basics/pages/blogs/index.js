import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const DefaultBlog = () => {
  const router = useRouter()

  const buttonHandler = () => {
    router.push('/page/12/')
  }

  return (
    <>
      <div>This is DefaultBlog Page</div>
      <Link href='/blogs/12'> Blogs </Link>
      <button onClick={buttonHandler}>Click Me</button>
    </>
  )
}

export default DefaultBlog