import {
    BaseEntity as Entity,
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm"

export abstract class BaseEntity extends Entity {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn({ type: "timestamptz" })
    created_at: Date

    @UpdateDateColumn({ type: "timestamptz" })
    updated_at: Date

    @Column({ type: "timestamp", nullable: true })
    deleted_at: Date
}
