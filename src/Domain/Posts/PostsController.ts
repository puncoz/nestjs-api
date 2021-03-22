import {
    Controller,
    Get,
}                       from "@nestjs/common"
import { PostsService } from "./PostsService"

@Controller("posts")
export class PostsController {
    constructor(private readonly postsService: PostsService) {
    }

    @Get()
    async list() {
        return await this.postsService.getAllPosts()
    }
}
