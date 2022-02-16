export default {
  title: 'Navigation (Navbar)',
  name: 'navigation',
  type: 'document',
  fields: [
    {
      title: 'Navigation',
      name: 'navigation',
      type: 'array',
      of: [{ type: 'navItem' }],
    },
    {
      title: 'Button Label',
      name: 'buttonLabel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'ButtonLink to',
      name: 'buttonLinkTo',
      type: 'string',
    },
  ],
};