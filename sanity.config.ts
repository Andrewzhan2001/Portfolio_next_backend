import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {colorInput} from "@sanity/color-input"
export default defineConfig({
  name: 'default',
  title: 'portfolioNext',

  projectId: 'w59p9zvh',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    colorInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
