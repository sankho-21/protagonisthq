'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const templates = [
  {
    title: "Protagonist Blueprint",
    url: 'https://protagonisthq.com/wp-content/uploads/2024/08/final-page-4-1536x864.png',
    description: "",
    price: "₹849"
  },
  {
    title: "Content Brain",
    url: 'https://protagonisthq.com/wp-content/uploads/2024/08/CB-thumb-5-1536x864.png',
    description: "",
    price: "₹649"
  },
  {
    title: "Academic Weapon",
    url: 'https://protagonisthq.com/wp-content/uploads/2024/08/academic_weapon_thumbnail-4-1536x864.png',
    description: "",
    price: ""
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
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            NotionTemplates
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="#templates" className="text-sm font-medium hover:underline">
              Templates
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Contact
            </Link>
          </nav>
          <Button variant="outline">Sign Up</Button>
        </div>
      </header>
      <main className="flex-grow bg-gray-50 text-black">

        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Protagonist <span>syndrome</span>
            </h1>
            <p className="mt-6 text-xl">The best disease you can have</p>
            <div className="mt-10">
              <Button size="lg">Browse Templates</Button>
            </div>
          </div>
        </section>

        <section id="templates" className="py-20 px-4 sm:px-6 bg-gray-50 lg:px-40">
          <div className="container mx-auto flex flex-col items-center">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Featured Templates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {templates.map((item) => (
                <div key={item.url} className="w-fit rounded-lg shadow-md overflow-hidden">
                  <Image
                    src={item.url}
                    alt={`Template ${item.url}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-contain"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-black">{item.title}</h3>
                    <p className="text-gray-600 mb-4">A brief description of the template and its features.</p>
                    <Button className="w-full">View Template</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} NotionTemplates. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
