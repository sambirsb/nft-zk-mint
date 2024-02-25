import { Alert } from '@sambirsb/uikit/providers'
import type { JsonRpcSigner } from 'ethers'
import { ethers } from 'ethers'
import { create } from 'zustand'

interface useAuthStoreType {
    signer: JsonRpcSigner
    login: () => void
    logout: () => void
}

const useAuthStore = create<useAuthStoreType>((set, get) => ({
    signer: null,
    login: async () => {
        try {
            if ('ethereum' in window) {
                const provider = new ethers.BrowserProvider(window.ethereum as any)
                const sig = await provider.getSigner()

                set({ signer: sig })
                Alert('success', 'Wallet connected!', 1000)
            } else Alert('error', 'You have no wallet installed!')
        } catch (e) {
            Alert('error', 'Something went wrong white connecting to Web3 wallet!')
            set({ signer: null })
        }
    },
    logout: async () => set({ signer: null })
}))

export default useAuthStore
