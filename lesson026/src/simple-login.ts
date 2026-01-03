import { Result, ok, err, isOk } from "./result";

type LoginResponse = {
  token: string;
};

function login(email: string, password: string): Result<LoginResponse, string> {
  if (!(email || password)) {
    return err("Email ou senha inválida!");
  }

  return ok({ token: "token-valido" });
}

const response = login("dev@exemple.com", "12345");

if (isOk(response)) {
  console.log(`token: ${response.value.token}`);
} else {
  console.error(`Error: ${response.error}`);
}
