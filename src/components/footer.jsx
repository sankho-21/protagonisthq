import { Mail } from 'lucide-react'
import React from 'react'

export default function Footer() {
    return (
        <footer className="w-full py-6 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto text-center space-y-2">
                <p className='flex items-center justify-center gap-3'>
                    <Mail className='w-4 h-4' />
                    protagonists.hq@gmail.com
                </p>
                <p>&copy; {new Date().getFullYear()} protagonistshq. All rights reserved.</p>
            </div>
        </footer>
    )
}