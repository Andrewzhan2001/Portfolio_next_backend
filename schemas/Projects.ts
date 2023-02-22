import {defineField, defineType} from 'sanity'
import {MdAirplay as icon} from 'react-icons/md'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
    }),
    defineField({
      name: 'technology',
      title: 'Project Technologies',
      type: 'array',
      of: [{
        type: 'string'
      }],
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'string',
    }),
    defineField({
      name: 'details',
      title: 'Project Details',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'color',
      title: 'Background Color',
      type: 'color',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'github',
      title: 'Github Link',
      type: 'url',
    }),
    defineField({
      name: 'website',
      title: 'Website Link',
      type: 'url',
    }),
    defineField({
      name: 'youtube',
      title: 'Youtube URL',
      type: 'url',
    }),
  ]
})
