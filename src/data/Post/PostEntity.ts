import {
    Column,
    Entity,
    ManyToOne,
}                     from "typeorm"
import { POSTS }      from "../../constants/DBTables"
import { BaseEntity } from "../BaseEntity"
import { UserEntity } from "../User/UserEntity"

@Entity(POSTS)
export class PostEntity extends BaseEntity {
    @Column({ type: "varchar", length: "255", unique: true })
    slug: string

    @Column({ type: "varchar", length: "255" })
    title: string

    @Column({ type: "text" })
    content: string

    @ManyToOne(type => UserEntity, author => author.posts, {
        eager: true,
    })
    author: UserEntity
}
