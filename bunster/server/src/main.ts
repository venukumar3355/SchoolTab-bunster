import { Bunster, CronExpression } from "@bunsterjs/server";
import { db } from "./database/database";
import { initDataBase } from "./database/init.db";
import { userLoginRoute } from "./modules/user.route";

const route = { ...userLoginRoute };
const app = new Bunster(route);

await initDataBase(db);

app.listen({
  port: 4000,
  loggerConfig: {
    logRequest: true,
  },
});
process.on("beforeExit", async () => {
  await db.$disconnect();
});

export type ApiRouter = typeof route;
