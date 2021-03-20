import { Connection }  from "typeorm"
import {
    Factory,
    Seeder,
}                      from "typeorm-seeding"
import { AppConfig }   from "../../Config/AppConfig"
import PostFaker       from "./Fakers/PostFaker"
import AdminUserSeeder from "./Seeders/AdminUserSeeder"

class DatabaseSeeder implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        await (new AdminUserSeeder()).run(factory, connection)

        if (AppConfig().seed_fakers) {
            await (new PostFaker()).run(factory)
        }
    }
}

export default DatabaseSeeder
