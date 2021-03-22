import { Module }          from "@nestjs/common"
import { TypeOrmModule }   from "@nestjs/typeorm"
import { UserEntity }      from "./UserEntity"
import { UsersController } from "./UsersController"
import { UsersService }    from "./UsersService"

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [UsersService],
    controllers: [UsersController],
})
export class UsersModule {
}
