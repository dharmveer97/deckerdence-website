export default {
  title: 'Blog Article Content',
  name: 'blogPageContent',
  type: 'object',
  fields: [
    {
      name: 'portableText',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
};
