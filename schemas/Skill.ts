import {defineField, defineType} from 'sanity'
import {MdLayers as icon} from 'react-icons/md'

export default defineType({
  name: 'skill',
  title: 'Skills',
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
      name: 'title',
      title: 'Skill Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Skill Description',
      type: 'string',
    }),
  ]
})
