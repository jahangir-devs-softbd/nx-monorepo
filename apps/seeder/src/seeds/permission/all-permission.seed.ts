import { DataSource } from "typeorm";
import { PermissionSeeder } from "@apps/seeder/seeds/permission/permission.seed";
import { PermissionGroupSeeder } from "@apps/seeder/seeds/permission/permission-group.seed";
import { PermissionModuleSeeder } from "@apps/seeder/seeds/permission/permission-module.seed";
import { PermissionGroupPermissionSeeder } from "@apps/seeder/seeds/permission/permission-group-permission.seed";
import { UserPermissionSeeder } from "@apps/seeder/seeds/permission/user-permission.seed";

export class AllPermissionSeeder {
  async run(dataSource: DataSource): Promise<any> {
    await new PermissionSeeder().run(dataSource);
    await new PermissionGroupSeeder().run(dataSource);
    await new PermissionModuleSeeder().run(dataSource);
    await new PermissionGroupPermissionSeeder().run(dataSource);
    await new UserPermissionSeeder().run(dataSource);
  }
}
