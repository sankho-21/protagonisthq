import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import templates from '@/data/all-templates.json'

export default function page() {
  return (
    <main className="flex-grow bg-inherit text-black">

      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gray-100 flex items-center justify-start">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold sm:text-5xl md:text-8xl italic text-[#438460]">
            protagonist <span className="font-normal text-[#1f3028]">syndrome</span>
          </h1>
          <p className="mt-6 text-base lg:text-lg font-semibold text-muted-foreground">the best disease you can have</p>
          <div className="mt-10">
            <Link href={'/templates'}>
              <Button size="lg" className='bg-[#43825f] hover:bg--[#43825f]/50'>Browse Templates</Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="templates" className="py-20 px-4 sm:px-6 bg-inherit lg:px-40 bg-[#eeffe6]">
        <div className="container mx-auto flex flex-col items-center space-y-12">

          <div className="space-y-4 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold italic text-center">Discover Premium Notion Templates</h2>
            <p className="text-xs lg:text-xl font-semibold text-muted-foreground">Enhance your Productivity with our Exclusive Notion Templates</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {templates.slice(0, 4).map((item) => (
              <div key={item.slug} className="w-fit rounded-lg shadow-md overflow-hidden bg-card">
                <Image
                  src={item.imageUrl}
                  alt={`Template ${item.title}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-contain"
                />
                <div className="p-6">
                  <div className="w-full flex items-center justify-between">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-lg font-semibold mb-2">{item.price ? `${item.price}` : 'Free'}</p> {/* Added price */}
                  </div>
                  <p className="mb-4">{item.shortDescription}</p>
                  <Link href={`/templates/${item.slug}`}>
                    <Button className="w-full bg-[#43825f] hover:bg-[#43825f]/90">View Template</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <Link href='/templates'>
            <Button size="lg" className='bg-[#43825f] gap-2 hover:bg-[#43825f]/90'>View All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>

        </div>
      </section>

    </main>
  )
}
