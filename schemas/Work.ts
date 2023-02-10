import {defineField, defineType} from 'sanity'
import {MdWork as icon} from 'react-icons/md'

export default defineType({
  name: 'work',
  title: 'Work Experience',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'color',
      title: 'Block Color',
      type: 'color',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'title',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'name',
      title: 'Company full Name',
      type: 'string',
    }),
    defineField({
      name: 'job',
      title: 'Job Title',
      type: 'string',
    }),
    defineField({
      name: 'begin',
      title: 'Start Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM',
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'end',
      title: 'End Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM',
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ]
})
