import { DataSource } from "typeorm";
import { LeaveCategorySeeder } from "@apps/seeder/seeds/leave/leave-category.seed";
import { LeaveTypeSeeder } from "@apps/seeder/seeds/leave/leave-type.seed";
import { LeavePlaceholderSeeder } from "@apps/seeder/seeds/leave/leave-placeholder.seeder";
import { LeaveRuleSeeder } from "@apps/seeder/seeds/leave/leave-rule.seed";

export class AllLeaveSeeder {
  async run(dataSource: DataSource): Promise<any> {
    await new LeaveCategorySeeder().run(dataSource);
    await new LeaveTypeSeeder().run(dataSource);
    await new LeavePlaceholderSeeder().run(dataSource);
    await new LeaveRuleSeeder().run(dataSource);
  }
}
