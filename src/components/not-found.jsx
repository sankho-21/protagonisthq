import Link from 'next/link'
import { Home } from 'lucide-react'
import { Button } from './ui/button'

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="px-4 py-16 mx-auto text-center lg:px-8">
                <div className="max-w-md mx-auto">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="mb-8 text-3xl font-semibold md:text-4xl dark:text-gray-300">
                        Oops! Page not found
                    </p>
                    <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
                    </p>
                    <Link href="/">
                        <Button>
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div >
    )
}