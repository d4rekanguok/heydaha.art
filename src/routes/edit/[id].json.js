import { promises as fs } from 'fs'
import path from 'path'

export const get = async ({ params }) => {
  const { id } = params

  const dataPath = path.join(process.cwd(), 'data', `${id}.json`)

  try {
    const data = await fs.readFile(dataPath, 'utf-8').then(v => JSON.parse(v))
    return {
      body: {
        data
      }
    }
  } catch(err) {
    return {
      body: {
        data: {
          title: '',
          desc: '',
          tags: ['']
        }
      }
    }
  }

}

export const post = async ({ params, body }) => {
  const { id } = params
  let data = {
    ...body,
    tags: body.tags.split(',').map(v => v.trim())
  }

  const filePath = path.join(process.cwd(), 'data', `${id}.json`)

  try {
    const result = await fs.readFile(filePath, 'utf-8').then(v => JSON.parse(v))
    data = {
      ...result,
      ...data,
    }
  } catch(err) {
    // do nothing
  }

  await fs.writeFile(filePath, JSON.stringify(data))

  return {
    status: 200
  }
}