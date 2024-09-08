import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const templates = [
  {
    title: "Protagonist Blueprint",
    slug: 'the-protagonist-blueprint',
    url: 'https://protagonisthq.com/wp-content/uploads/2024/08/final-page-4-1536x864.png',
    description: "",
    price: "₹ 849"
  },
  {
    title: "Content Brain",
    slug: "content-brain",
    url: 'https://protagonisthq.com/wp-content/uploads/2024/08/CB-thumb-5-1536x864.png',
    description: "",
    price: "₹ 649"
  },
  {
    title: "Academic Weapon",
    slug: "academic-weapon",
    url: 'https://protagonisthq.com/wp-content/uploads/2024/08/academic_weapon_thumbnail-4-1536x864.png',
    description: "",
    price: "₹ 449"
  },
  {
    title: "Assignment Headquaters",
    slug: "assingment-headquaters",
    url: 'https://protagonisthq.com/wp-content/uploads/2024/08/assignment-HQ-thumbnail-3-1536x864.png',
    description: "",
    price: ""
  },
  {
    title: "Social Media Content Planner",
    slug: "social-media-content-planner",
    url: 'https://protagonisthq.com/wp-content/uploads/2024/08/contentplanner-3-1536x864.jpg',
    description: "",
    price: ""
  },
  {
    title: "Get Started with Notion",
    slug: "get-started-with-notion",
    url: 'https://protagonisthq.com/wp-content/uploads/2024/08/Artboard-1-3-1536x864.png',
    description: "",
    price: ""
  },
];

export default function page() {
  return (
    <section id="templates" className="py-20 px-4 sm:px-6 bg-inherit lg:px-40 bg-[#eeffe6]">


      <div className="container mx-auto flex flex-col items-center space-y-12">

        <div className="space-y-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold italic text-center">Discover Premium Notion Templates</h2>
          <p className="text-base lg:text-xl font-semibold text-muted-foreground">Enhance your Productivity with our Exclusive Notion Templates</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {templates.map((item) => (
            <div key={item.url} className="w-fit rounded-lg shadow-md overflow-hidden bg-card">
              <Image
                src={item.url}
                alt={`Template ${item.url}`}
                width={400}
                height={300}
                className="w-full h-64 object-contain"
              />
              <div className="p-6">
                <div className="w-full flex items-center justify-between">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-lg font-semibold mb-2">{item.price ? `${item.price}` : 'Free'}</p> {/* Added price */}
                </div>
                <p className="mb-4">A brief description of the template and its features.</p>
                <Link href={`/templates/${item.slug}`}>
                  <Button className="w-full bg-[#43825f] hover:bg-[#43825f]/90">View Template</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
