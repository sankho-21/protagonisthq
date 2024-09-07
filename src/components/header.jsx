import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export default function Header() {

    return (

        <header className="w-full py-6 px-4 sm:px-6 lg:px-40">

            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    <Image
                        src={'https://protagonisthq.com/wp-content/uploads/2024/08/cropped-logo-79x60.png'}
                        width={50}
                        height={50}
                        className="p-1 py-1.5 rounded-md"
                    />
                </Link>
                <Button size="lg" className='bg-[#43825f]'>Templates</Button>
            </div>

        </header>
    )
}
