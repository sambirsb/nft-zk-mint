'use client'
import { useEffect, type FC, useState } from 'react'
import s from './Header.module.scss'
import useAuthStore from '@shared/stores/useAuthStore'
import { Button } from '@sambirsb/uikit'
import { classnames } from '@sambirsb/uikit/utils'

const Header: FC = () => {
    const [isLoading, setIsLoading] = useState(true)
    const signer = useAuthStore((state) => state.signer)
    const login = useAuthStore((state) => state.login)
    const logout = useAuthStore((state) => state.logout)

    useEffect(() => {
        login()
        setIsLoading(false)
    }, [login])

    return (
        <div className={s.main}>
            <div className={classnames('container', s.con)}>
                <p>ShitPunks...</p>
                <nav className={s.nav}>
                    <Button
                        isLoading={isLoading}
                        variant='primary'
                        size='large'
                        onClick={() => {
                            signer ? logout() : login()
                        }}
                    >
                        {signer ? `${signer.address.slice(0, 5)}...${signer.address.slice(signer.address.length - 5, signer.address.length)}` : 'Connect Wallet'}
                    </Button>
                </nav>
            </div>
        </div>
    )
}

export default Header
