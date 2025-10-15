import app from "@/src/app";
import config from "@/src/config/config";

app.listen(config.port, () => {
  console.log(
    `Server running in ${config.nodeEnv} mode on port ${config.port}`
  );
});
