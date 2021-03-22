import {
    Factory,
    Seeder,
}                     from "typeorm-seeding"
import { PostEntity } from "../../../Domain/Posts/PostEntity"
import { random }     from "../../../Support/Helpers"

class PostFaker implements Seeder {
    public async run(factory: Factory): Promise<void> {
        await factory(PostEntity)().createMany(random(10, 40))
    }
}

export default PostFaker
