import {defineField, defineType} from 'sanity'

export const language = defineType({
  name: 'language',
  title: 'Language',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'level',
      type: 'string',
      description: 'e.g. "Native", "Professional (B2)"',
    }),
    defineField({
      name: 'value',
      title: 'Proficiency (%)',
      type: 'number',
      validation: (rule) => rule.min(0).max(100),
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'level'},
  },
})
