import path from 'path'
import * as utils from '../utils'

export function run() {
  const outputDir = process.env.__OUTPUT_DIR__ || 'dist'
  utils.vueCliService('build').then(() => {
    const source = path.resolve(__dirname, `../../../${outputDir}`)
    const destination = path.join(process.cwd(), outputDir)
    console.error(`${source},${destination}`)
    if (source === destination) return
    utils.copyFile(source, destination)
  })
}
