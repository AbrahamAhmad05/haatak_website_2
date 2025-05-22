import { gilroy, gilroy_semibold } from '@/lib/font'
import Image from 'next/image'
import React from 'react'

const VaultSection = () => {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className="flex flex-col justify-center md:px-10 px-4 py-10 gap-[36px] ">
                <h5 className={`${gilroy.className} text-3xl bg-gradient-to-br from-[#FFD191] via-[#E39A35] to-[#FFD191] bg-clip-text text-transparent`}>Vault-Grade Security</h5>

                <h2 className="text-7xl bg-gradient-to-br from-[#FFE0B5] via-[#D08E31] to-[#FFE2BA] bg-clip-text text-transparent">
                    Your Gold Is Safer Than Selfies.
                </h2>
                <h6 className={`text-lg md:text-2xl bg-gradient-to-br from-[#FFD191] via-[#E39A35] to-[#FFD191] bg-clip-text text-transparent ${gilroy_semibold.className}`}>Stored in RBI-compliant vaults. Fully insured. End-to-end encrypted. You own it. We protect it.</h6>
            </div>
            <div className="img">
                <Image src="/home_imgs/vault_img.png" width={1920} height={938} alt='Vault' />
            </div>
        </div>
    )
}

export default VaultSection