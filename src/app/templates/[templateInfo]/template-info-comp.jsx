'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TemplatePage({ template }) {

    const router = useRouter()

    return (
        <div className="container mx-auto py-8 px-40">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <Carousel className="w-full h-fit max-w-xs mx-auto md:max-w-3xl col-span-2">
                    <CarouselContent>
                        {template.links.map((link, index) => (
                            <CarouselItem key={index}>
                                <Image
                                    key={index}
                                    src={link}
                                    width={750}
                                    height={250}
                                    alt={`Template image ${index + 1}`}
                                    className="object-cover w-full h-auto rounded-md p-1"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">{template.title}</CardTitle>
                        <CardDescription>
                            A customizable Notion template for efficiently organizing tasks, projects, and workflows.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold mb-2">About</h3>
                                <p className="text-sm text-gray-600">
                                    This versatile Notion template offers a complete framework for organizing projects, tracking tasks, and managing workflows. Easily customizable, it helps you stay organized and boost productivity across personal or professional tasks.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Link href={template.cta} className="w-full">
                            <Button className="w-full">Enroll Now</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}