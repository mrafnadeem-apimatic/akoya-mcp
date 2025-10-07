// server/httpHandler.ts (new) - export a standard handler
import { createServerRouter } from './app'; // whatever your server constructs
export async function handleRequest(req: Request): Promise<Response> {
  const router = await createServerRouter();
  return router.fetch(req); // e.g., Hono/itty-router/fetch-handler style
}
