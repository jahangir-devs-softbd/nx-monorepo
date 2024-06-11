import { format, transports } from "winston";
import "winston-daily-rotate-file";

const dailyRotateFileTransport = new transports.DailyRotateFile({
  filename: "%DATE%.log",
  dirname: "apps/admin-api/logs",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "7d",
});

export const winstonConfig = {
  format: format.combine(
    format.timestamp(),
    format.printf((msg) => {
      return `${msg.timestamp} - [${msg.level}] - ${msg.message}`;
    }),
  ),
  transports: [dailyRotateFileTransport],
};
