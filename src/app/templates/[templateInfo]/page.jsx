
import React from 'react';
import TemplatePage from './template-info-comp';
import NotFound from '@/components/not-found';

const templatesInfo = [
  {
    title: 'The Protagonist Blueprint',
    slug: 'the-protagonist-blueprint',
    description: '',
    links: [
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-1-curved-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-2-riyal-1-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-3-real-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-4-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-5-1024x576.png'
    ],
    cta: 'https://nas.io/checkout-global?communityId=668fc923efa0d245b6036dcf&communityCode=PROTAGONISTS&requestor=signupRequestor&sourceInfoType=folder&sourceInfoOrigin=66a4e0f6219e053f42cfff08'
  },
  {
    title: "Content Brain",
    slug: "content-brain",
    description: '',
    links: [
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-1-curved-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-2-riyal-1-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-3-real-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-4-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-5-1024x576.png'
    ],
    cta: 'https://nas.io/protagonists/products/mzxb'
  },
  {
    title: "Academic Weapon",
    slug: "academic-weapon",
    description: '',
    links: [
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-1-curved-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-2-riyal-1-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-3-real-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-4-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-5-1024x576.png'
    ],
    cta: 'https://nas.io/protagonists/products/aurb'
  },
  {
    title: "Assignment Headquaters",
    slug: "assingment-headquaters",
    description: '',
    links: [
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-1-curved-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-2-riyal-1-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-3-real-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-4-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-5-1024x576.png'
    ],
    cta: 'https://nas.io/protagonists/products/ebyt'
  },
  {
    title: "Social Media Content Planner",
    slug: "social-media-content-planner",
    description: '',
    links: [
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-1-curved-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-2-riyal-1-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-3-real-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-4-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-5-1024x576.png'
    ],
    cta: 'https://nas.io/protagonists/products/mzxb'
  },
  {
    title: "Get Started with Notion",
    slug: "get-started-with-notion",
    description: '',
    links: [
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-1-curved-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-2-riyal-1-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-3-real-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-4-1024x576.png',
      'https://protagonisthq.com/wp-content/uploads/2024/08/PB-page-5-1024x576.png'
    ],
    cta: 'https://nas.io/protagonists/products/mzxb'
  },
];

export default function Page({ params }) {
  // Find the template info by title
  const template = templatesInfo.find(template => template.slug === params.templateInfo);

  return (
    <>
      {
        template ?
          <TemplatePage template={template} />
          :
          <NotFound />
      }
    </>
  );
}
