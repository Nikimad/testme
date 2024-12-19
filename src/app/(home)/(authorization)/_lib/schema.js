import * as yup from "yup";
import { REQUIERD } from "@/lib/messages";

const contextKeyIsSignUp = "$isSignUp";

const MIN_PASSWORD = (n) => `Password must be atleast ${n} characters`;
const PASSWORD_MATCH = "Password confirmation must match password";

const requiredString = yup.string().required(REQUIERD);

export const schema = yup.object({
  username: requiredString,
  password: requiredString.when(contextKeyIsSignUp, ([isSignUp], schema) =>
    isSignUp ? schema.min(6, MIN_PASSWORD(6)) : schema
  ),
  password_confirmation: yup
    .mixed()
    .when(contextKeyIsSignUp, ([isSignUp], schema) =>
      isSignUp
        ? requiredString.oneOf([yup.ref("password")], PASSWORD_MATCH)
        : schema
    ),
});
