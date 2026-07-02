import {defineArrayMember, defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

// Singleton: the /about page text content. Seeded/queried with a fixed _id "aboutInfo".
export const aboutInfo = defineType({
  name: 'aboutInfo',
  title: 'About page',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitles',
      title: 'Intro paragraphs',
      type: 'array',
      of: [defineArrayMember({type: 'text', rows: 3})],
    }),
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'array',
      of: [defineArrayMember({type: 'timelineItem'})],
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [defineArrayMember({type: 'timelineItem'})],
    }),
    defineField({
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [defineArrayMember({type: 'language'})],
    }),
  ],
  preview: {
    prepare: () => ({title: 'About page'}),
  },
})
