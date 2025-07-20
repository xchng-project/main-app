import type {Metadata} from 'next'
import {Comfortaa} from 'next/font/google'
import React, {ReactNode} from 'react'
import nextConfig from '@/../next.config'

interface PropsType {
    children: ReactNode
}

const comfortaa = Comfortaa({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'XCHNG projects',
    description: "Site with my projects",
}

export default async function RootLayout(props: PropsType) {
    const {children} = props

    return <html className={comfortaa.className}>
    <head>
        <title></title>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="apple-touch-icon" sizes="180x180"
              href={`${nextConfig.basePath || ''}/favicon/apple-touch-icon.png`}/>
        <link rel="icon" type="image/png" sizes="32x32"
              href={`${nextConfig.basePath || ''}/favicon/favicon-32x32.png`}/>
        <link rel="icon" type="image/png" sizes="16x16"
              href={`${nextConfig.basePath || ''}/favicon/favicon-16x16.png`}/>
        <link rel="manifest" href={`${nextConfig.basePath || ''}/manifest.json`}/>
        <meta name="msapplication-TileColor" content="#603cba"/>
        <meta name="theme-color" content="#ffffff"/>
    </head>
    <body>
    <main className="s-main">
        <div className="page-content">{children}</div>
    </main>
    </body>
    </html>
}
