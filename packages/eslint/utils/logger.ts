import { createConsola, LogLevels } from 'consola'

const logger = createConsola({
  level: process.env.ESLINT_DEBUG ? LogLevels.debug : LogLevels.box,
})

export default logger
