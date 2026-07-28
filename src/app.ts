import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import logger from "./config/logger.js";
import type { HttpError } from "http-errors";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Auth Server");
});

//global error handler
app.use((err: HttpError, req: Request, res: Response, _next: NextFunction) => {
  logger.error(err.message);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    errors: [
      {
        type: err.name,
        msg: err.message,
        path: "",
        location: "",
      },
    ],
  });
});

export default app;
