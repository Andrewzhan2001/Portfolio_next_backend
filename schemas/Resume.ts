import {defineField, defineType} from 'sanity'
import {MdInsertLink as icon} from 'react-icons/md'

export default defineType({
  name: 'link',
  title: 'Links',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'resume',
      title: 'Resume url',
      type: 'url',
    }),
    defineField({
      name: 'linkedin',
      title: 'Linkedin url',
      type: 'url',
    }),
    defineField({
      name: 'github',
      title: 'Github url',
      type: 'url',
    }),
  ]
})