import { Module }          from "@nestjs/common"
import { TypeOrmModule }   from "@nestjs/typeorm"
import { PostEntity }      from "./PostEntity"
import { PostsController } from "./PostsController"
import { PostsService }    from "./PostsService"

@Module({
    imports: [TypeOrmModule.forFeature([PostEntity])],
    providers: [PostsService],
    controllers: [PostsController],
})
export class PostsModule {
}
