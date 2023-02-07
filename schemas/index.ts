import blockContent from './blockContent'
import crewMember from './crewMember'
import castMember from './castMember'
import movie from './movie'
import person from './person'
import screening from './screening'
import plotSummary from './plotSummary'
import plotSummaries from './plotSummaries'

import waterlooCourse from './waterlooCourse'
import laurierCourse from './laurierCourse'
export const schemaTypes = [
  // Document types
  movie,
  person,
  screening,
  waterlooCourse,
  laurierCourse,


  // Other types
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
]
