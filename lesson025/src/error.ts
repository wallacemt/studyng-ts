export type ApiError =
  | { kind: "network"; message: string }
  | { kind: "http"; status: number; message: string }
  | { kind: "parse"; message: string };

export function fromUnknowToApiError(error: unknown): ApiError {
  if (error instanceof Error) {
    return { kind: "network", message: error.message };
  }
  return { kind: "network", message: "Error desconhecido" };
}
