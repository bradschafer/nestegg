export const config = {
  logDir: 'logs',
  winston: {
    level: 'warn',
    enableMiddleware: true,
    transports: {
      console: {
        colorize: true,
        timestamp: true,
        json: false,
        showLevel: true,
      },
    },
    target: {
      trace: 'trace.log',
      debug: 'debug.log',
      error: 'error.log',
      warn: 'info.log',
      info: 'info.log',
    },
  },
};
