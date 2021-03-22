import { Injectable }       from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository }       from "typeorm"
import { UserEntity }       from "./UserEntity"

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ) {
    }
}
