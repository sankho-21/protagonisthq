'use client'

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function TemplatePage({ template }) {

    const router = useRouter()

    return (
        <div className="w-full py-3 lg:py-8 px-2 lg:px-10 xl:px-40 flex flex-col ">
            <div className="mb-6">
                <Button
                    variant="ghost"
                    onClick={() => router.back()}
                    className="flex items-center text-primary hover:text-primary/80"
                >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to Templates
                </Button>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Image
                    key={template.title}
                    src={template.imageUrl}
                    width={750}
                    height={250}
                    alt={template.title}
                    className="object-cover w-full h-auto rounded-md lg:col-span-2"
                />

                <Card className="w-auto">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">{template.title}</CardTitle>
                        <CardDescription>{template.shortDescription}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold mb-2">About</h3>
                                <p className="text-sm text-gray-600">{template.description}</p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className='mt-auto'>
                        <Link href={template.cta} className="w-full">
                            <Button className="w-full">Buy Now</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div >
    )
}