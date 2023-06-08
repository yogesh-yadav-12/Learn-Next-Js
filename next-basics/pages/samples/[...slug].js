import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const ShowSample = () => {
  const router = useRouter()
  console.log(router.query.slug);
  
  return (
    <div>This is a Sample page {router.isReady ? router.query.slug[1] : `Fetching`}</div>
  )
}

export default ShowSample