import { TABLE_USER_PERMISSIONS } from "@lams/shared/utils/util/database.table";
import { PermissionSeeder } from "@apps/seeder/seeds/permission/permission.seed";
import { DataSource } from "typeorm";

export class UserPermissionSeeder {
  async run(dataSource: DataSource): Promise<any> {
    const data: any[] = [];

    new PermissionSeeder().data.map((item) => {
      data.push({
        user_id: 1,
        permission_id: item.id,
      });
    });

    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.query("TRUNCATE table " + TABLE_USER_PERMISSIONS); //truncate table first
    await dataSource.createQueryBuilder().insert().into(TABLE_USER_PERMISSIONS, ["user_id", "permission_id"]).values(data).execute();
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}
