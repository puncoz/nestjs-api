import { registerAs }           from "@nestjs/config"
import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { MIGRATIONS }           from "../Constants/DBTables"
import { AppConfig }            from "./AppConfig"

type DatabaseConfigType = TypeOrmModuleOptions & {
    [key: string]: any
}

export const DatabaseConfig = registerAs("database", (): DatabaseConfigType => ({
    name: "default",
    type: "postgres",
    host: process.env.DB_HOST || "127.0.0.1",
    port: Number(process.env.DB_PORT || 5432),
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    synchronize: false,
    logging: AppConfig().debug,
    dropSchema: false,
    migrationsTableName: MIGRATIONS,
    ssl: AppConfig().isProduction(),
    autoLoadEntities: true,

    migrations: ["dist/Database/Migrations/**/*{.ts,.js}"],
    entities: ["dist/Database/Entities/**/*Entity{.ts,.js}"],
    subscribers: ["dist/Database/Entities/**/*Subscriber{.ts,.js}"],

    seeds: [
        "dist/Database/Seeds/**/*Seeder{.ts,.js}",
        "dist/Database/Seeds/Fakers/*Faker{.ts,.js}",
    ],

    factories: [
        "dist/Database/Factories/*Factory{.ts,.js}",
    ],

    cli: {
        migrationsDir: "src/Database/Migrations",
        entitiesDir: "src/Database/Entities",
        subscribersDir: "src/Database/Entities",
    },
}))
