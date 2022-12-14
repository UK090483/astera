import {defineConfig, LogoProps} from 'sanity'
import {deskTool} from 'sanity/desk'
import structure from './desk/deskStructure'
import pbSchema from '../PageBuilder/schema'
import {media} from 'sanity-plugin-media'
import {REMOTE_URL} from '../PageBuilder/constants'
import {visionTool} from '@sanity/vision'
import {orderRankField} from '@sanity/orderable-document-list'

import Logo from '../components/Layout/Logo'

import {theme} from './theme'
const remoteUrl = REMOTE_URL
const localUrl = `http://localhost:3000`

const previewSecret = import.meta.env.SANITY_STUDIO_PREVIEW_SECRET

const addOrderField = () => {
  return pbSchema.map((item) => {
    if (item.name === 'person') {
      //@ts-ignore
      return {...item, fields: [...item.fields, orderRankField({type: 'person'})]}
    }
    return item
  })
}

export default defineConfig({
  name: 'default',
  title: 'ASTERA',

  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET,
  plugins: [
    deskTool({structure}),
    media(),
    ...(import.meta.env.MODE === 'development' ? [visionTool()] : []),
  ],
  schema: {
    //@ts-ignore
    types: addOrderField(),
  },

  theme,
  document: {
    productionUrl: async (prev, context) => {
      const {document} = context
      if (!['page', 'news', 'person'].includes(document?._type)) return prev
      const baseUrl = window.location.hostname === 'localhost' ? localUrl : remoteUrl
      const docId = typeof document?._id === 'string' && document._id.replace('drafts.', '')
      if (!docId) return prev
      const previewUrl = new URL(baseUrl)
      previewUrl.pathname = `/api/preview/start`
      previewUrl.searchParams.append(`secret`, previewSecret)
      previewUrl.searchParams.append(`id`, docId)
      return previewUrl.toString()
    },
  },
})
