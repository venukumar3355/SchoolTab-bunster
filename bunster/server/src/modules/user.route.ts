import { createRouter, route } from "@bunsterjs/server";
import userLoginService from "./user.login.service";
import { UserLogInInputSchema } from "../../common/login.zod";
export const userLoginRoute = createRouter().routes({
  userLoginData: route(UserLogInInputSchema).handle(
    userLoginService.userLoginDetils
  ),
});
