import * as Faker     from "faker"
import {
    define,
    factory,
}                     from "typeorm-seeding"
import { PostEntity } from "../../Domain/Posts/PostEntity"
import { UserEntity } from "../../Domain/Users/UserEntity"
import { random }     from "../../Support/Helpers"

define(PostEntity, (faker: typeof Faker) => {
    const post = new PostEntity()

    post.slug = faker.lorem.slug()
    post.title = faker.lorem.sentence()
    post.content = faker.lorem.paragraphs(random(3, 6))
    post.author = factory(UserEntity)() as any

    return post
})
