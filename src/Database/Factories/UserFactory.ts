import * as Faker from "faker"
import { define } from "typeorm-seeding"
import {
    Gender,
    Roles,
    UserEntity,
}                 from "../Entities/User/UserEntity"

define(UserEntity, (faker: typeof Faker) => {
    const user = new UserEntity()

    user.email = faker.internet.email().toLowerCase()
    user.username = faker.internet.userName().toLowerCase()
    user.password = "secret"
    user.name = faker.name.findName()
    user.gender = faker.random.arrayElement(Object.values(Gender))
    user.role = faker.random.arrayElement(Object.values(Roles).filter(role => role !== Roles.ADMIN))

    return user
})
