import {defineArrayMember, defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'

// Singleton: the home page text content. Queried with a fixed _id "homeInfo".
export const homeInfo = defineType({
  name: 'homeInfo',
  title: 'Home page',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({name: 'heroTitle', title: 'Hero title', type: 'string'}),
    defineField({name: 'heroSubtitle', title: 'Hero subtitle', type: 'string'}),
    defineField({
      name: 'heroBadges',
      title: 'Hero badges',
      description: 'Two short labels shown around the hero title',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (rule) => rule.max(2),
    }),
    defineField({name: 'whoAmITitle', title: '"Who am I" heading', type: 'string'}),
  ],
  preview: {
    prepare: () => ({title: 'Home page'}),
  },
})
