import {
    EntityRepository,
    Repository,
}                     from "typeorm"
import { UserEntity } from "./UserEntity"

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {

}
