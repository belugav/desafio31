const winston = require('winston')

const warnFilter = winston.format((info, opts) => { 
	return info.level === 'warn' ? info : false 
})();

const transports = [
    new winston.transports.Console({
        level:'info',
        json: false,
		colorize: true,
        format: winston.format.combine(
			winston.format.colorize(),
			winston.format.simple()
		)
    }),
    new winston.transports.File({
        level: 'warn',
        filename: 'logs/warn.log',
        format: winston.format.combine(
            warnFilter,
            winston.format.timestamp(),
        )
    }),
    new winston.transports.File({
        level:'error',
        filename: 'logs/error.log',
    })
]

module.exports = winston.createLogger({
    level: 'info',
    transports: transports
  });

