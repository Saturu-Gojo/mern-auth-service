import app from "./app.js";
import { Config } from "./config/index.js";
import logger from "./config/logger.js";

const startServer = () => {
  const PORT = Config.PORT || 5555;
  try {
    app.listen(PORT, () => {
      logger.info(`Server started on port ${PORT}`);
    });
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
};

startServer();
