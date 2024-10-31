import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.tsx",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:moD5Iv7zYSiw@ep-winter-cherry-a5js1lvr.us-east-2.aws.neon.tech/Creacionix-AI?sslmode=require",
  },
});
