import { start } from "./dist/server/entry.mjs";

const port = process.env.PORT || 8080;

start({
  port,
});
