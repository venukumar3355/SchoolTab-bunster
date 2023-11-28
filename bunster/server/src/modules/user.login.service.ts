import {
  BadRequestError,
  BunsterJwt,
  HttpError,
  HttpStatus,
  RouteContext,
} from "@bunsterjs/server";
import { UserLoginInput } from "../../common/login.zod";
import { db } from "../database/database";

async function userLoginDetils({ input }: RouteContext<UserLoginInput>) {
  if (!input) throw new HttpError("inva;lid input ", HttpStatus.BAD_REQUEST);

  const findUserByEmail = await db.user.findFirst({
    where: {
      email: input.email,
    },
  });
  if (findUserByEmail) {
    const verifyPassword = await Bun.password.verify(
      input.password,
      findUserByEmail?.password
    );

    if (verifyPassword) {
      const token = await createToken(findUserByEmail.id);

      const data = await db.user.update({
        where: {
          id: findUserByEmail.id,
        },
        data: {
          token: token,
        },
        select: {
          id: true,
          name: true,
          email: true,
          token: true,
        },
      });

      return { data };
    }
  }
}
async function createToken(userId: number) {
  const dataStoredInToken = {
    id: userId,
  };
  return BunsterJwt.sign(dataStoredInToken, "1 day");
}
export default {
  userLoginDetils,
};
