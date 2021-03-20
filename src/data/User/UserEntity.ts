import {
    Column,
    Entity,
    OneToMany,
}                     from "typeorm"
import { USERS }      from "../../constants/DBTables"
import { BaseEntity } from "../BaseEntity"
import { PostEntity } from "../Post/PostEntity"

export enum Gender {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other"
}

export enum Role {
    ADMIN = "admin",
    GENERAL = "general"
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

    @Column({ type: "enum", enum: Role, default: Role.GENERAL })
    role: Role

    @OneToMany(type => PostEntity, post => post.author)
    posts: PostEntity[]
}
