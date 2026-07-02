import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

// A tile on the /projects list page.
export const projectCard = defineType({
  name: 'projectCard',
  title: 'Project card',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({name: 'title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'subtitle', type: 'string'}),
    defineField({name: 'category', type: 'string'}),
    defineField({name: 'year', type: 'number'}),
    defineField({
      name: 'icon',
      title: 'Icon name',
      type: 'string',
      description: 'oh-vue-icons name, e.g. bi-spotify, co-trello',
    }),
    defineField({
      name: 'img',
      title: 'Image path',
      type: 'string',
      description: 'Path in /public, e.g. /01hero.jpg',
    }),
    defineField({
      name: 'path',
      title: 'Link path',
      type: 'string',
      description: 'Route, e.g. /project/spotify',
    }),
    defineField({
      name: 'order',
      type: 'number',
      description: 'Sort order (ascending)',
    }),
  ],
  orderings: [
    {title: 'Order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'title', subtitle: 'category'},
  },
})
