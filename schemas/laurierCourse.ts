import {defineField, defineType} from 'sanity'
import {MdSchool as icon} from 'react-icons/md'

export default defineType({
  name: 'laurier',
  title: 'Wilfrid Laurier Courses',
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
      name: 'url',
      title: 'Course URL',
      type: 'url',
    }),
  ]
})
