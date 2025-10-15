import { defineConfig } from "drizzle-kit";
import config from "./src/config/config";

export default defineConfig({
  dialect: "postgresql",
  schema: "@/src/db/schema",
  out: "@/src/db/migration",
  dbCredentials: {
    url: config.databaseUrl,
  },
  verbose: true,
  strict: true,
});
