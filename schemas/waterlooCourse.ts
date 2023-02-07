import {defineField, defineType} from 'sanity'
import {MdSchool as icon} from 'react-icons/md'

export default defineType({
  name: 'waterloo',
  title: 'Waterloo Courses',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Course Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Course Name',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Course Type',
      type: 'string',
      options: {
        list: [
          {title: 'Mathematics', value: 'math'},
          {title: 'Computer science', value: 'cs'}
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'url',
      title: 'Course URL',
      type: 'url',
    }),
  ]
})
