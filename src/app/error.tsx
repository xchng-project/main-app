'use client'

import {useEffect} from 'react'

export default function Error({error}: {error: Error & {digest?: string}}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return <div className="container">
        <h2>Some error</h2>
    </div>
}