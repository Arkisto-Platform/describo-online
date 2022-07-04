import { createLogger, format, transports } from "winston";
const { combine, timestamp, printf } = format;

export function getLogger() {
    const myFormat = printf(({ level, message, timestamp }) => {
        return `${timestamp} ${level.toUpperCase()}: ${message}`;
    });
    const logger = createLogger({
        level: process.env.LOG_LEVEL
            ? process.env.LOG_LEVEL
            : process.env.NODE_ENV === "development"
            ? "debug"
            : "info",
        format: combine(timestamp(), myFormat),
        transports: [new transports.Console()],
    });
    return logger;
}
