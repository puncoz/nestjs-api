import { registerAs }           from "@nestjs/config"
import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { MIGRATIONS }           from "../constants/DBTables"
import { appConfig }            from "./app.config"

type DatabaseConfig = TypeOrmModuleOptions & {
    [key: string]: any
}

export const databaseConfig = registerAs("database", (): DatabaseConfig => ({
    type: "postgres",
    host: process.env.DB_HOST || "127.0.0.1",
    port: Number(process.env.DB_PORT || 5432),
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    synchronize: false,
    logging: appConfig().debug,
    dropSchema: false,
    migrationsTableName: MIGRATIONS,
    ssl: appConfig().isProduction(),

    migrations: ["dist/database/migrations/**/*{.ts,.js}"],
    entities: ["dist/data/**/*Entity{.ts,.js}"],
    subscribers: ["dist/data/**/*Subscriber{.ts,.js}"],

    seeds: [
        "dist/database/**/*Seeder{.ts,.js}",
        "dist/database/**/*Faker{.ts,.js}",
    ],

    factories: [
        "dist/data/**/*Factory{.ts,.js}",
    ],

    cli: {
        migrationsDir: "src/database/migrations",
        entitiesDir: "src/data",
        subscribersDir: "src/data",
    },
}))
