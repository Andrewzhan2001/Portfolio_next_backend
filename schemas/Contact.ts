import {defineField, defineType} from 'sanity'
import {MdPerson as icon} from 'react-icons/md'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'rate',
      title: 'Rate',
      type: 'number',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Submit Date',
      type: 'string',
    }),
  ],
})
