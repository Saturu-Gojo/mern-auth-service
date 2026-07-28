import app from "./app.js";
import { Config } from "./config/index.js";

const startServer = () => {
  const PORT = Config.PORT || 5555;
  try {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
