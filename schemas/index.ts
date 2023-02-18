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
import Work from './Work'
import Skill from './Skill'
import Projects from './Projects'
import Resume from './Resume'
export const schemaTypes = [
  // Document types
  movie,
  person,
  screening,
  waterlooCourse,
  laurierCourse,
  Work,
  Skill,
  Projects,
  Resume,
  
  // Other types
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
]
