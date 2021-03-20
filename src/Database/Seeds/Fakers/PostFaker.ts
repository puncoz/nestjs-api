import {
    Factory,
    Seeder,
}                     from "typeorm-seeding"
import { random }     from "../../../Utils/Helpers"
import { PostEntity } from "../../Entities/Post/PostEntity"

class PostFaker implements Seeder {
    public async run(factory: Factory): Promise<void> {
        await factory(PostEntity)().createMany(random(10, 40))
    }
}

export default PostFaker
