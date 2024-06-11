import { DataSource } from "typeorm";
import { WorkFlowSeeder } from "@apps/seeder/seeds/work-flow/work-flow.seed";
import { WorkFlowStepSeeder } from "@apps/seeder/seeds/work-flow/work-flow-step.seed";
import { WorkFlowActorSeeder } from "@apps/seeder/seeds/work-flow/work-flow-actor.seed";

export class AllWorkFlowSeeder {
  async run(dataSource: DataSource): Promise<any> {
    await new WorkFlowSeeder().run(dataSource);
    await new WorkFlowStepSeeder().run(dataSource);
    await new WorkFlowActorSeeder().run(dataSource);
  }
}
