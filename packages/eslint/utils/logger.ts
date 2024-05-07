import { LogLevels, createConsola } from 'consola'

const logger = createConsola({
  level: process.env.ESLINT_DEBUG === 'true' ? LogLevels.debug : LogLevels.box,
})

export default logger
