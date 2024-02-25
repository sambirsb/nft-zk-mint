'use client'
import { useState, type FC, useEffect } from 'react'
import s from './_styles/Page.module.scss'
import { classnames } from '@sambirsb/uikit/utils'
import Image from 'next/image'
import { Button, Text } from '@sambirsb/uikit'
import useAuthStore from '@shared/stores/useAuthStore'
import { Alert } from '@sambirsb/uikit/providers'

const handleMint = () => {
    return Alert('success', 'asd')
}

const Home: FC = () => {
    const [isImageLarge, setIsImageLarge] = useState(false)
    const signer = useAuthStore((state) => state.signer)
    const login = useAuthStore((state) => state.login)

    useEffect(() => {
        const handleClick = () => {
            if (isImageLarge) setIsImageLarge(false)
        }

        addEventListener('click', handleClick)

        return () => removeEventListener('click', handleClick)
    }, [isImageLarge])

    return (
        <div className={classnames('container', s.main)}>
            <div className={classnames(s.left, 'flex_vertical_gap_8')}>
                <div className='flex_vertical_gap_4'>
                    <Text size='44'>You can mint your Punk!</Text>
                    <Text size='22'>Just click a button!</Text>
                </div>
                <Button
                    variant='primary'
                    size='large'
                    className={s.mint}
                    onClick={() => {
                        signer ? handleMint() : login()
                    }}
                >
                    {signer ? 'Mint' : 'Connect Wallet'}
                </Button>
            </div>
            <div className={s.right} style={isImageLarge ? { width: 'calc(100% / 2 - 32px)' } : { width: 'calc(100% / 2.5 - 32px)' }}>
                <Image
                    onClick={(e) => {
                        e.stopPropagation()
                        setIsImageLarge(true)
                    }}
                    src='/punk.png'
                    alt=''
                    width={1000}
                    height={1000}
                />
            </div>
        </div>
    )
}

export default Home
