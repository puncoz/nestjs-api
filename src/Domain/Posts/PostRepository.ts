import {
    EntityRepository,
    Repository,
}                     from "typeorm"
import { PostEntity } from "./PostEntity"

@EntityRepository(PostEntity)
export class PostRepository extends Repository<PostEntity> {

}
