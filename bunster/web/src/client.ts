/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApiClient } from "@bunsterjs/client";
import { type ApiRouter } from "../../server/src/main";
import { cleanNotifications, showNotification } from "@mantine/notifications";

export const ApiClient = createApiClient<ApiRouter>({
  baseUrl: "http://localhost:4000",
  requestInterceptor(config: any) {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    return config;
  },
  responseInterceptor: (response) => {
    return response;
  },
  errorInterceptor: (error: any) => {
    if (error.response.status === 401 || error.response.status === 403) {
      localStorage.clear();
      cleanNotifications();
      const message =
        "Your current session expired. Login Again to start your new session.";
      showNotification({
        color: "red",
        title: "Session Expired",
        message,
      });
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    }
    return Promise.reject(error);
  },
});
