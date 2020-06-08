export default {
  name: 'mainPage',
  title: 'Main Page',
  type: 'document',
  fields: [
    {
      name: 'seoTitle',
      title: 'Seo Title',
      type: 'string',
    },
    {
      title: 'Seo Keywords',
      name: 'seoKeywords',
      type: 'string',
    },
    {
      title: 'Seo Meta Description',
      name: 'seoMetaDescription',
      type: 'text',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
    },
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    },
    {
      name: 'heroBackgroundImage',
      title: 'Hero Background image',
      type: 'image',
    },
    {
      name: 'normalSubtitle',
      title: 'Subtitle Has Text Normal',
      type: 'string',
    },
    {
      title: 'Information',
      name: 'information',
      type: 'array',
      of: [
        {
          title: 'Section',
          type: 'aboutFeature',
        },
      ],
    },
    {
      title: 'Arcade',
      name: 'arcade',
      type: 'array',
      of: [{ type: 'mainPageArcade' }],
    },
    {
      name: 'detailsMainHeading',
      title: 'Details Main Heading',
      type: 'string',
    },
    {
      title: 'Finer Details',
      name: 'details',
      type: 'array',
      of: [{ type: 'mainPageFinerDetail' }],
    },
    {
      title: 'features',
      name: 'Features',
      type: 'vehicleFeature',
    },
    {
      title: 'Gallery',
      name: 'gallery',
      type: 'array',
      of: [{ type: 'mainPageGallery' }],
    },
    {
      title: 'Download Showcase',
      name: 'downloadShowcase',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'heroTitle',
      subtitle: 'slug.current',
      media: 'heroBackgroundImage',
    },
  },
};
