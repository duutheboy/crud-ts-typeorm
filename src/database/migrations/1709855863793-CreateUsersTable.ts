import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1709855863793 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            //Create trable Users
            new Table({
                name: 'users',
                //Add colums id, name, email
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
