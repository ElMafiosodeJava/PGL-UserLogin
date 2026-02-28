import { API_BASE_URL } from "./api.config";

export type HttpMethod = "GET" | "POST";

export async function httpRequest<T>(
  path: string,
  method: HttpMethod,
  body?: unknown,
  extraHeaders?: Record<string, string>
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(extraHeaders ?? {}),
    },
    body: body != null ? JSON.stringify(body) : undefined,
  });

  const contentType = res.headers.get("content-type") ?? "";
  const isJson = contentType.includes("application/json");

  const payload = isJson ? await res.json() : await res.text();

  if (!res.ok) {
    const msg =
      (payload && typeof payload === "object" && "message" in payload
        ? Array.isArray(payload.message)
          ? payload.message.join(", ")
          : payload.message
        : null) || `HTTP ${res.status}`;
    throw new Error(String(msg));
  }

  return payload as T;
}
