import React from 'react'
import { useRouter } from 'next/router' 
import Link from 'next/link'

const PageNo = (props) => {
    const router = useRouter()

    console.log(`Router PathName: ${router.pathname}`);
    console.log(`Router Query: ${router.query.pageId}`);

    return (
        <>
            <div>This is a page Id {router.query.pageId} </div>
            <Link href={{pathname: '/blogs/21'}}>Take me to blog 21</Link>
        </>
    )
}

export default PageNo