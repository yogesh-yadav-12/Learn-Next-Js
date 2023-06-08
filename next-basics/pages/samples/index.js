import React from 'react'
import { useRouter } from 'next/router'

const SampleDefault = () => {
    const router = useRouter()
    
    console.log(router.pathname)
    console.log(router.query)

    return (
        <div>This is a SampleDefault Page. </div>
    )
}

export default SampleDefault