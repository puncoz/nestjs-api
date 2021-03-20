import {
    Factory,
    Seeder,
}                     from "typeorm-seeding"
import { random }     from "../../../Utils/Helpers"
import { UserEntity } from "../../Entities/User/UserEntity"

class UserFaker implements Seeder {
    public async run(factory: Factory): Promise<void> {
        await factory(UserEntity)().createMany(random(10, 40))
    }
}

export default UserFaker
