import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm"
import {
    POSTS,
    USERS,
} from "../../constants/DBTables"

export class CreatePostsTable1616223622430 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: POSTS,
            columns: [
                { name: "id", type: "bigserial", isPrimary: true },
                { name: "slug", type: "varchar", length: "255", isUnique: true },
                { name: "title", type: "varchar", length: "255" },
                { name: "content", type: "text" },
                { name: "author_id", type: "bigint" },
                { name: "created_at", type: "timestamp", default: "now()" },
                { name: "updated_at", type: "timestamp", default: "now()" },
                { name: "deleted_at", type: "timestamp", isNullable: true },
            ],
        }))

        await queryRunner.createForeignKeys(POSTS, [
            new TableForeignKey({
                columnNames: ["author_id"],
                referencedColumnNames: ["id"],
                referencedTableName: USERS,
                onDelete: "CASCADE",
            }),
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable(POSTS)
        await queryRunner.dropTable(table)
    }

}
