'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const templates = [
  {
    title: "Protagonist Blueprint",
    url: 'https://protagonisthq.com/wp-content/uploads/2024/08/final-page-4-1536x864.png',
    description: "",
    price: "₹ 849"
  },
  {
    title: "Content Brain",
    url: 'https://protagonisthq.com/wp-content/uploads/2024/08/CB-thumb-5-1536x864.png',
    description: "",
    price: "₹ 649"
  },
  {
    title: "Academic Weapon",
    url: 'https://protagonisthq.com/wp-content/uploads/2024/08/academic_weapon_thumbnail-4-1536x864.png',
    description: "",
    price: "₹ 449"
  },
  {
    title: "Assignment Headquaters",
    url: 'https://protagonisthq.com/wp-content/uploads/2024/08/assignment-HQ-thumbnail-3-1536x864.png',
    description: "",
    price: ""
  },
  {
    title: "Social Media Content Planner",
    url: 'https://protagonisthq.com/wp-content/uploads/2024/08/contentplanner-3-1536x864.jpg',
    description: "",
    price: ""
  },
  {
    title: "Get Started with Notion",
    url: 'https://protagonisthq.com/wp-content/uploads/2024/08/Artboard-1-3-1536x864.png',
    description: "",
    price: ""
  },
];

export function NotionTemplatesLanding() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow bg-inherit text-black">

        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gray-100 flex items-center justify-start">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-8xl italic text-[#438460]">
              protagonist <span className="font-normal text-[#1f3028]">syndrome</span>
            </h1>
            <p className="mt-6 text-lg font-semibold text-muted-foreground">the best disease you can have</p>
            <div className="mt-10">
              <Button size="lg" className='bg-[#43825f]'>Browse Templates</Button>
            </div>
          </div>
        </section>

        <section id="templates" className="py-20 px-4 sm:px-6 bg-inherit lg:px-40 bg-[#eeffe6]">
          <div className="container mx-auto flex flex-col items-center space-y-12">

            <div className="space-y-4 text-center">
              <h2 className="text-5xl font-bold italic text-center">Discover Premium Notion Templates</h2>
              <p className="text-xl font-semibold text-muted-foreground">enhance your productivity with our exclusive notion templates</p>
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
                    <Button className="w-full bg-[#43825f] hover:bg-[#43825f]/90">View Template</Button>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className='bg-[#43825f] gap-2 hover:bg-[#43825f]/90'>View All
              <ArrowRight className="w-4 h-4" />
            </Button>

          </div>
        </section>

      </main>

      <footer className="w-full py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} NotionTemplates. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
