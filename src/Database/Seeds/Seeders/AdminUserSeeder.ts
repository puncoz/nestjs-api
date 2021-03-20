import { Connection } from "typeorm"
import {
    Factory,
    Seeder,
}                     from "typeorm-seeding"
import {
    Gender,
    Roles,
    UserEntity,
}                     from "../../Entities/User/UserEntity"

class AdminUserSeeder implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        const userExists = await connection.getRepository(UserEntity).count({ username: "admin" })

        if (!userExists) {
            await factory(UserEntity)().create({
                email: "admin@admin.com",
                username: "admin",
                password: "password",
                name: "Administrator",
                role: Roles.ADMIN,
                gender: Gender.MALE,
            })
        }
    }
}

export default AdminUserSeeder
