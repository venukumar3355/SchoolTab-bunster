import { BunsterJwt, HttpError, RouteContext } from "@bunsterjs/server";
import { db } from "../database/database";

async function userMiddleWare(cxt: RouteContext) {
  const splitToken = cxt.headers.get("Authorization")
    ? cxt.headers.get("Authorization")?.split("Bearer ")[1]
    : null;

  if (!splitToken) throw new HttpError("Authentication token missing", 401);

  const verifyToken = await BunsterJwt.verify(splitToken);

  //   const userId = verifyToken.id;
  const user = await db.user.findFirst({
    where: {
      token: verifyToken,
      //   id: userId,
    },
  });

  if (user) {
    cxt.meta.user = user;
  } else {
    throw new HttpError("user is not found ", 400);
  }
}
