import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateMovies1608254572168
implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'movies',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'overview',
            type: 'varchar',
          },
          {
            name: 'runtime',
            type: 'int',
          },
          {
            name: 'release_date',
            type: 'varchar',
          },
          {
            name: 'genres',
            type: 'varchar[]',
          },
          {
            name: 'popularity',
            type: 'float',
          },
          {
            name: 'poster_path',
            type: 'varchar',
          },
          {
            name: 'translations',
            type: 'varchar[]',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movies');
  }
}
