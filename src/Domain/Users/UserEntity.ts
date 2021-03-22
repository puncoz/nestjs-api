import {
    Column,
    Entity,
    OneToMany,
}                     from "typeorm"
import { USERS }      from "../../Constants/DBTables"
import { BaseEntity } from "../../Support/BaseEntity"
import { PostEntity } from "../Posts/PostEntity"

export enum Gender {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other"
}

export enum Roles {
    ADMIN = "admin",
    AUTHOR = "author",
    READER = "reader"
}

@Entity(USERS)
export class UserEntity extends BaseEntity {
    @Column({ type: "varchar", length: 255 })
    name: string

    @Column({ type: "varchar", length: 150, unique: true })
    email: string

    @Column({ type: "varchar", length: 150, unique: true })
    username: string

    @Column({ type: "varchar", length: 255, select: false })
    password: string

    @Column({ type: "enum", enum: Gender, default: Gender.MALE })
    gender: Gender

    @Column({ type: "enum", enum: Roles, default: Roles.READER })
    role: Roles

    @OneToMany((type) => PostEntity, (post) => post.author)
    posts: PostEntity[]
}
