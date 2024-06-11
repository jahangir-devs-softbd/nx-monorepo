import { DataSource } from "typeorm";
import { WorkFlowStepEntity } from "@lams/shared/database/entities/work-flow/work-flow-step.entity";

export class WorkFlowStepSeeder {
  data: any[] = [
    {
      id: 1,
      work_flow_id: 1,
      performer_base_desk_id: 8,
      performer_office_layer_id: 8,
      action_types: ["1", "2"],
      sort_order: 1,
      row_status: 1,
    },
    {
      id: 2,
      work_flow_id: 1,
      performer_base_desk_id: 7,
      performer_office_layer_id: 6,
      action_types: ["1", "2"],
      sort_order: 2,
      row_status: 1,
    },
    {
      id: 3,
      work_flow_id: 2,
      performer_base_desk_id: 8,
      performer_office_layer_id: 8,
      action_types: ["1", "2"],
      sort_order: 1,
      row_status: 1,
    },
    {
      id: 4,
      work_flow_id: 2,
      performer_base_desk_id: 7,
      performer_office_layer_id: 6,
      action_types: ["1", "2"],
      sort_order: 2,
      row_status: 1,
    },
    {
      id: 5,
      work_flow_id: 3,
      performer_base_desk_id: 8,
      performer_office_layer_id: 8,
      action_types: ["1", "2"],
      sort_order: 1,
      row_status: 1,
    },
    {
      id: 6,
      work_flow_id: 3,
      performer_base_desk_id: 7,
      performer_office_layer_id: 6,
      action_types: ["1", "2"],
      sort_order: 2,
      row_status: 1,
    },
  ];

  async run(dataSource: DataSource): Promise<any> {
    try {
      await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
      await dataSource.getRepository(WorkFlowStepEntity).clear();
      await dataSource.manager.save(WorkFlowStepEntity, this.data);
      await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
    } catch (e) {
      console.log("error:", e);
    }
  }
}
