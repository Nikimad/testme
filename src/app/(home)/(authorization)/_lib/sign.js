"use server";

import { schema } from "./schema";
import { api } from "@/lib/api";
import validate from "@/lib/validate";
import getData from "@/lib/getData";
import { cookies as nextCookies } from "next/headers";
import getCookie from "@/lib/getCookie";

const sign = async ({ context }, formData) => {
  const data = getData(formData);

  let success = false;
  let user = null;
  let errors = await validate(schema, data, context);

  if (!errors) {
    const [serverErrors, currentUser, cookies] = await api[
      context.isSignUp ? "signup" : "signin"
    ](data);

    if (currentUser) {
      const cookiesStore = await nextCookies();
      const session = getCookie(cookies, "_session_id");
      cookiesStore.set("_session_id", session);
      success = true;
      user = currentUser;

    }
    
    errors = serverErrors;
  }

  return {
    data,
    success,
    user,
    errors,
    context,
  };
};

export default sign;
