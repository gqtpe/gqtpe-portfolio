import {defineField, defineType} from 'sanity'

// Shared shape for both Experience and Education entries.
export const timelineItem = defineType({
  name: 'timelineItem',
  title: 'Entry',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'period',
      title: 'Period',
      type: 'string',
      description: 'e.g. "May 2024 - Jan 2025"',
    }),
    defineField({
      name: 'body',
      title: 'Description',
      type: 'text',
      rows: 6,
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'period'},
  },
})
