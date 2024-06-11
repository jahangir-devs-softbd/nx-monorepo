import { TABLE_PERMISSION_GROUP_PERMISSIONS } from "@lams/shared/utils/util/database.table";
import { PermissionSeeder } from "@apps/seeder/seeds/permission/permission.seed";
import { DataSource } from "typeorm";

export class PermissionGroupPermissionSeeder {
  async run(dataSource: DataSource): Promise<any> {
    const columns: string[] = ["permission_id", "permission_group_id"];

    const data: any[] = [];
    new PermissionSeeder().data?.map((item) => {
      data.push({
        permission_id: item.id,
        permission_group_id: 1, // GIVING ALL PERMISSIONS TO PERMISSION GROUP 1
      });
      data.push({
        permission_id: item.id,
        permission_group_id: 12, // GIVING ALL PERMISSIONS TO PERMISSION GROUP 12
      });
    });

    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.query("TRUNCATE table " + TABLE_PERMISSION_GROUP_PERMISSIONS); //truncate table first
    await dataSource.createQueryBuilder().insert().into(TABLE_PERMISSION_GROUP_PERMISSIONS, columns).values(data).execute();
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}
