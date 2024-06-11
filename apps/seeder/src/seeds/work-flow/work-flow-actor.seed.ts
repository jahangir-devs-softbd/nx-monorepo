import { DataSource } from "typeorm";
import { WorkFlowActorEntity } from "@lams/shared/database/entities/work-flow/work-flow-actor.entity";

export class WorkFlowActorSeeder {
  data: any[] = [
    {
      id: 1,
      module: 3,
      work_flow_id: 3,
      base_desk_id: 9,
      base_office_id: 6,
      office_id: 6,
      desk_id: 9,
      row_status: 1,
    },
    {
      id: 2,
      module: 2,
      work_flow_id: 2,
      base_desk_id: 9,
      base_office_id: 6,
      office_id: 6,
      desk_id: 9,
      row_status: 1,
    },
    {
      id: 3,
      module: 3,
      work_flow_id: 3,
      base_desk_id: 9,
      base_office_id: 6,
      office_id: 6,
      desk_id: 9,
      row_status: 1,
    },
  ];

  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(WorkFlowActorEntity).clear();
    await dataSource.manager.save(WorkFlowActorEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}
