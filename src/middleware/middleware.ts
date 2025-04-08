import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async (
  { request, redirect },
  next
) => {
  const host = request.headers.get("host");

  if (host === "leonelrivas.dev") {
    return redirect("https://www.leonelrivas.dev", 301);
  }

  return next();
};
