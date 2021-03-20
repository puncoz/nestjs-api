import { registerAs } from "@nestjs/config"

export const AppConfig = registerAs("app", () => ({
    app_env: process.env.APP_ENV || "production",
    port: Number(process.env.APP_PORT || 3000),
    debug: (process.env.APP_DEBUG || false) === "true",
    seed_fakers: (process.env.SEED_FAKERS || false) === "true",

    isProduction: () => process.env.APP_ENV === "production",
}))
