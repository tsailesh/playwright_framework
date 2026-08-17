import winston from "winston";
import fs from "fs";
import path from "path";

const logDir = path.resolve("logs");

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const timestamp = new Date()
  .toISOString()
  .replace(/T/, "_")
  .replace(/:/g, "-")
  .replace(/\..+/, "");

const logFile = path.join(logDir, `test-${timestamp}.log`);

const logger = winston.createLogger({
  level: "info",

  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}] ${message}`;
    }),
  ),

  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: logFile,
    }),
  ],
});

export default logger;