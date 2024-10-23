import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export default function Header() {

    return (

        <header className="w-full py-0 px-4 sm:px-6 lg:px-10 xl:px-40">

            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    <Image
                        src={'/small-logo.svg'}
                        width={80}
                        height={80}
                        className="p-1 py-1.5 rounded-md"
                        alt='protag logo'
                    />
                </Link>
                <div className='flex items-center justify-center gap-4'>
                    {/* <Link href={'/'}>
                        <Button variant='secondary' className=''>Home</Button>
                    </Link> */}
                    <Link href={'/templates'}>
                        <Button className=''>Templates</Button>
                    </Link>
                </div>
            </div>

        </header>
    )
}
