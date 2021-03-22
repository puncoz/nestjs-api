import {
    Factory,
    Seeder,
}                     from "typeorm-seeding"
import { UserEntity } from "../../../Domain/Users/UserEntity"
import { random }     from "../../../Support/Helpers"

class UserFaker implements Seeder {
    public async run(factory: Factory): Promise<void> {
        await factory(UserEntity)().createMany(random(10, 40))
    }
}

export default UserFaker
