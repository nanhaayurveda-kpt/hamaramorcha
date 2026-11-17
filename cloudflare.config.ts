import { bindings, defineConfig, defineWorker } from "cf/config";
import { createWorkersResponseStoreServiceBindingConfig } from "@vinext/cloudflare/cache/config";

try {
  process.loadEnvFile(".env.local");
} catch {}

function need(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} .env.local में नहीं मिला`);
  return value;
}

const responseStore = await createWorkersResponseStoreServiceBindingConfig({
  worker: {
    name: "hamaramorcha-response-store",
    compatibilityDate: "2026-11-11",
    compatibilityFlags: ["nodejs_compat"],
  },
  bucket: "hamaramorcha-response-store-cache-bodies",
});

export const responseStoreServiceBinding = responseStore.serviceBindingWorker;

export default defineConfig({
  worker: defineWorker({
    ...responseStore.applicationWorker,
    name: "hamaramorcha",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-11-11",
    compatibilityFlags: ["nodejs_compat"],
    observability: { logs: { enabled: true } },
    assets: {
      htmlHandling: "none",
      notFoundHandling: "none",
      runWorkerFirst: ["/*", "!/_next/static/*", "!/*/_next/static/*"],
    },
    env: {
      ...responseStore.applicationWorker.env,
      ASSETS: bindings.assets(),
      NEXT_PUBLIC_SANITY_DATASET: bindings.text("production"),
      NEXT_PUBLIC_SANITY_PROJECT_ID: bindings.text("4ifmq4x3"),
      AUTH_SECRET: bindings.text(need("AUTH_SECRET")),
      GOOGLE_CLIENT_ID: bindings.text(need("GOOGLE_CLIENT_ID")),
      GOOGLE_CLIENT_SECRET: bindings.text(need("GOOGLE_CLIENT_SECRET")),
      SANITY_API_TOKEN: bindings.text(need("SANITY_API_TOKEN")),
    },
  }),
});