import { cache } from "react";
import { api } from "./api";

const getUser = cache(async (cookie) => {
  const [_, user] = await api.getUser(cookie);
  return user;
});

export default getUser;
