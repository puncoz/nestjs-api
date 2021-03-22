import { Injectable }       from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository }       from "typeorm"
import { PostEntity }       from "./PostEntity"

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(PostEntity)
        private postRepository: Repository<PostEntity>,
    ) {
    }

    async getAllPosts(): Promise<PostEntity[]> {
        return this.postRepository.find()
    }
}
