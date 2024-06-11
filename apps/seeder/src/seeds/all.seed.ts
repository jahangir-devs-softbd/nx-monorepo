import { DataSource } from "typeorm";
import { AllUserSeeder } from "@apps/seeder/seeds/user/all-user.seed";
import { AllPermissionSeeder } from "@apps/seeder/seeds/permission/all-permission.seed";
import { AllOfficeSeeder } from "@apps/seeder/seeds/office/all-office.seed";
import { AllLocationSeeder } from "@apps/seeder/seeds/location/all-location.seed";
import { AllWorkFlowSeeder } from "@apps/seeder/seeds/work-flow/all-work-flow.seed";
import { AllLeaveSeeder } from "@apps/seeder/seeds/leave/all-leave.seed";
import { AllCommentSeed } from "@apps/seeder/seeds/comment/all-comment.seed";
import { AllProspectiveSeed } from "@apps/seeder/seeds/prospective/all-prospective.seed";
import { AllDisciplinaryActionSeed } from "@apps/seeder/seeds/disciplinary-action/all-disciplinary-action.seed";

export class AllSeeder {
  async run(dataSource: DataSource): Promise<any> {
    try {
      await new AllProspectiveSeed().run(dataSource);
      await new AllUserSeeder().run(dataSource);
      await new AllPermissionSeeder().run(dataSource);
      await new AllOfficeSeeder().run(dataSource);
      await new AllCommentSeed().run(dataSource);
      await new AllLocationSeeder().run(dataSource);
      await new AllWorkFlowSeeder().run(dataSource);
      await new AllLeaveSeeder().run(dataSource);
      await new AllDisciplinaryActionSeed().run(dataSource);
    } catch (e) {
      console.log(e);
    }
  }
}
