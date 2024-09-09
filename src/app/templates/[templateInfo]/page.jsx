
import React from 'react';
import TemplatePage from './template-info-comp';
import NotFound from '@/components/not-found';
import templates from '@/data/all-templates.json'


export default function Page({ params }) {
  // Find the template info by title
  const template = templates.find(template => template.slug === params.templateInfo);

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
