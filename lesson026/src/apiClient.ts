import { ApiError, fromUnknowToApiError } from "./error";
import { PostResponse } from "./types";
import { Result, ok, err } from "./result";

const BASE_URL = "http://dummyjson.com";

async function parseJson<T>(response: Response): Promise<Result<T, ApiError>> {
  try {
    const data: T = await response.json();
    return ok<T, ApiError>(data);
  } catch (error) {
    return err<T, ApiError>({ kind: "parse", message: "Falha ao realizar parse JSON" });
  }
}

export async function getTyped<T>(path: string): Promise<Result<T, ApiError>> {
  try {
    const response = await fetch(`${BASE_URL}${path}`);

    if (!response.ok) {
      return err<T, ApiError>({
        kind: "http",
        status: response.status,
        message: `Error HTTP: ${response.status}`,
      });
    }

    return await parseJson<T>(response);
  } catch (error) {
    return err<T, ApiError>({
      kind: "network",
      message: fromUnknowToApiError(error).message,
    });
  }
}
export async function getPosts(): Promise<Result<PostResponse, ApiError>> {
  return getTyped("/posts");
}
