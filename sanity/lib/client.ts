import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn, token } from '../env'

export const readClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,

})
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token,
})
