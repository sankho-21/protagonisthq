import Image from 'next/image';
import React from 'react';

const templatesInfo = [
  {
    title: 'The Protagonist Blueprint',
    slug: 'the-protagonist-blueprint',
    links: [
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-1-curved-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-2-riyal-1-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-3-real-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-4-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-5-1024x576.png'
    ]
  }
];

export default function Page({ params }) {
  // Find the template info by title
  const template = templatesInfo.find(template => template.slug === params.templateInfo);

  return (
    <div className="lg:px-60">
      {template ? (
        <div className='space-y-10 p-4'>
          <h1 className="text-2xl font-bold mb-4">{template.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3">
            {/* Map through the image links */}
            {template.links.map((link, index) => (
              <Image
                key={index}
                src={link}
                width={650}
                height={650}
                alt={`Template image ${index + 1}`}
                className="object-cover w-full h-auto rounded-md"
              />
            ))}
          </div>
        </div>
      ) : (
        <p>Template not found</p>
      )}
    </div>
  );
}
