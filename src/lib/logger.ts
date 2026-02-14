/**
 * Structured logging system for Blackforge Digital.
 *
 * Provides severity-based logging with structured data output.
 * In production, logs are JSON-formatted for ingestion by log aggregation systems.
 *
 * @module logger
 */

/**
 * Log severity levels in order of increasing severity.
 */
export type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'fatal';

/**
 * Structured log entry.
 */
interface LogEntry {
	level: LogLevel;
	message: string;
	timestamp: string;
	context?: Record<string, unknown> | undefined;
	error?:
		| {
				name: string;
				message: string;
				stack?: string | undefined;
		  }
		| undefined;
}

/**
 * Logger configuration.
 */
interface LoggerConfig {
	minLevel: LogLevel;
	isDevelopment: boolean;
}

const LOG_LEVELS: Record<LogLevel, number> = {
	debug: 0,
	info: 1,
	warn: 2,
	error: 3,
	fatal: 4
};

class Logger {
	private config: LoggerConfig;

	constructor(config: LoggerConfig) {
		this.config = config;
	}

	/**
	 * Logs a debug message.
	 *
	 * Use for detailed diagnostic information useful during development.
	 *
	 * @param message - The log message
	 * @param context - Additional context data
	 */
	debug(message: string, context?: Record<string, unknown>): void {
		this.log('debug', message, context);
	}

	/**
	 * Logs an info message.
	 *
	 * Use for general informational messages about application state.
	 *
	 * @param message - The log message
	 * @param context - Additional context data
	 */
	info(message: string, context?: Record<string, unknown>): void {
		this.log('info', message, context);
	}

	/**
	 * Logs a warning message.
	 *
	 * Use for potentially harmful situations that don't prevent operation.
	 *
	 * @param message - The log message
	 * @param context - Additional context data
	 */
	warn(message: string, context?: Record<string, unknown>): void {
		this.log('warn', message, context);
	}

	/**
	 * Logs an error message.
	 *
	 * Use for error events that might still allow the application to continue.
	 *
	 * @param message - The log message
	 * @param error - The error object
	 * @param context - Additional context data
	 */
	error(message: string, error?: Error, context?: Record<string, unknown>): void {
		const entry: LogEntry = {
			level: 'error',
			message,
			timestamp: new Date().toISOString(),
			context
		};

		if (error) {
			entry.error = {
				name: error.name,
				message: error.message,
				stack: error.stack
			};
		}

		this.output(entry);
	}

	/**
	 * Logs a fatal error message.
	 *
	 * Use for severe errors that will cause the application to terminate.
	 *
	 * @param message - The log message
	 * @param error - The error object
	 * @param context - Additional context data
	 */
	fatal(message: string, error?: Error, context?: Record<string, unknown>): void {
		const entry: LogEntry = {
			level: 'fatal',
			message,
			timestamp: new Date().toISOString(),
			context
		};

		if (error) {
			entry.error = {
				name: error.name,
				message: error.message,
				stack: error.stack
			};
		}

		this.output(entry);
	}

	private log(level: LogLevel, message: string, context?: Record<string, unknown>): void {
		if (LOG_LEVELS[level] < LOG_LEVELS[this.config.minLevel]) {
			return;
		}

		const entry: LogEntry = {
			level,
			message,
			timestamp: new Date().toISOString(),
			context
		};

		this.output(entry);
	}

	private output(entry: LogEntry): void {
		if (this.config.isDevelopment) {
			// Development: Pretty console output
			const emoji = {
				debug: '🔍',
				info: 'ℹ️',
				warn: '⚠️',
				error: '❌',
				fatal: '💀'
			}[entry.level];

			console.log(`${emoji} [${entry.level.toUpperCase()}] ${entry.message}`);
			if (entry.context) {
				console.log('Context:', entry.context);
			}
			if (entry.error) {
				console.error('Error:', entry.error);
			}
		} else {
			// Production: JSON output for log aggregation
			console.log(JSON.stringify(entry));
		}
	}
}

/**
 * Global logger instance.
 *
 * Configured based on NODE_ENV environment variable.
 */
export const logger = new Logger({
	minLevel: process.env['NODE_ENV'] === 'production' ? 'info' : 'debug',
	isDevelopment: process.env['NODE_ENV'] !== 'production'
});
