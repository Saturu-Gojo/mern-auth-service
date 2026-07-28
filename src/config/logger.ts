import winston from "winston";
import { Config } from "./index.js";

const logger = winston.createLogger({
  level: "info",

  defaultMeta: { serviceName: "auth-service" },
  transports: [
    new winston.transports.File({
      filename: "combine.log",
      level: "info",
      dirname: "logs",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      silent: Config.NODE_ENV === "test",
    }),
    new winston.transports.File({
      filename: "error.log",
      level: "error",
      dirname: "logs",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      silent: Config.NODE_ENV === "test",
    }),
    new winston.transports.Console({
      level: "info",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      silent: Config.NODE_ENV === "test",
    }),
  ],
});

export default logger;
