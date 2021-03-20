import { registerAs } from "@nestjs/config"

export const appConfig = registerAs("app", () => ({
    app_env: process.env.APP_ENV || "production",
    port: Number(process.env.APP_PORT || 3000),
    debug: (process.env.APP_DEBUG || false) === "true",

    isProduction: () => process.env.APP_ENV === "production",
}))
