import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableIndex,
}                from "typeorm"
import { USERS } from "../../constants/DBTables"

export class CreateUsersTable1616169659169 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: USERS,
            columns: [
                { name: "id", type: "bigserial", isPrimary: true },
                { name: "email", type: "varchar", length: "150", isUnique: true },
                { name: "username", type: "varchar", length: "100", isUnique: true },
                { name: "password", type: "varchar", length: "255" },
                { name: "name", type: "varchar", length: "255" },
                { name: "gender", type: "varchar", length: "20" },
                { name: "role", type: "varchar", length: "25" },
                { name: "created_at", type: "timestamp", default: "now()" },
                { name: "updated_at", type: "timestamp", default: "now()" },
                { name: "deleted_at", type: "timestamp", isNullable: true },
            ],
        }))

        await queryRunner.createIndices(USERS, [
            new TableIndex({ name: `INDEX_${USERS}_EMAIL`, columnNames: ["email"] }),
            new TableIndex({ name: `INDEX_${USERS}_USERNAME`, columnNames: ["username"] }),
            new TableIndex({ name: `INDEX_${USERS}_ROLE`, columnNames: ["role"] }),
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable(USERS)

        await queryRunner.dropIndices(table, table.indices)
        await queryRunner.dropTable(table)
    }

}
