import type { FC, PropsWithChildren } from 'react'
// eslint-disable-next-line
import { Noto_Sans } from 'next/font/google'
import Header from '@widgets/Header'
import { AlertProvider } from '@sambirsb/uikit/providers'
import '@sambirsb/uikit/global.css'
import '@sambirsb/uikit/defaultVars.css'
import '@app/styles/global.scss'

const inter = Noto_Sans({ weight: ['400', '500'], subsets: ['latin', 'cyrillic'] })

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html>
            <head />
            <body className={inter.className}>
                <Header />
                {children}
                <AlertProvider />
            </body>
        </html>
    )
}

export default RootLayout
