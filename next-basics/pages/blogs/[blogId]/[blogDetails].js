import React from 'react'
import { useRouter } from 'next/router'

const BlogDetails = () => {
    const router = useRouter()
    console.log(router.query);

    return (
        <div>This is Blog {router.query.blogDetails} </div>
    )
}

export default BlogDetails