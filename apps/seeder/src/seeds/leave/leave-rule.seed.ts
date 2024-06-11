import { DataSource } from "typeorm";
import { BooleanStatus } from "@lams/shared/utils/util/enums";
import { LeaveRuleEntity } from "@lams/shared/database/entities/leave/leave-rule.entity";

export class LeaveRuleSeeder {
  data: any[] = [
    {
      //full salary earned leave
      id: 1,
      leave_category_id: 4,
      leave_type_id: 1,
      is_earned_leave: BooleanStatus.YES,
      employee_types: ["1", "2"],
      total_days_for_each_earned_leave: 11,
      max_days_at_a_time: 20,
      max_exceptional_days_at_a_time: 20,
      max_times_in_job_life: 5,
      is_yearly_leave: 0,
      is_deductible_from_leave_calculation: 1,
      eligibility_status_for_earned_leave: ["1", "2"],
      payable_status: 1,
      row_status: 1,
    },
    //half salary earned leave
    {
      id: 2,
      leave_category_id: 4,
      leave_type_id: 2,
      is_earned_leave: BooleanStatus.YES,
      employee_types: ["1", "2"],
      total_days_for_each_earned_leave: 12,
      max_days_at_a_time: 20,
      max_exceptional_days_at_a_time: 20,
      max_times_in_job_life: 5,
      is_yearly_leave: 0,
      is_deductible_from_leave_calculation: 1,
      eligibility_status_for_earned_leave: ["1", "2"],
      payable_status: 1,
      row_status: 1,
    },
    {
      id: 3,
      leave_category_id: 1,
      is_earned_leave: BooleanStatus.NO,
      employee_types: ["1", "2"],
      total_days: 10,
      max_days_at_a_time: 3,
      max_exceptional_days_at_a_time: 3,
      max_times_in_job_life: 10,
      is_yearly_leave: 1,
      year: "2024",
      is_deductible_from_leave_calculation: 0,
      eligibility_status_for_earned_leave: ["1", "2"],
      payable_status: 1,
      row_status: 1,
    },
    {
      id: 4,
      leave_category_id: 2,
      is_earned_leave: BooleanStatus.NO,
      employee_types: ["1", "2"],
      total_days: 300,
      max_days_at_a_time: 90,
      max_exceptional_days_at_a_time: 90,
      max_times_in_job_life: 2,
      is_yearly_leave: 0,
      is_deductible_from_leave_calculation: 1,
      payable_status: 1,
      row_status: 1,
    },
    {
      id: 5,
      leave_category_id: 5,
      is_earned_leave: BooleanStatus.NO,
      employee_types: ["1", "2"],
      total_days: 60,
      max_days_at_a_time: 60,
      max_exceptional_days_at_a_time: 60,
      max_times_in_job_life: 2,
      is_yearly_leave: 0,
      is_deductible_from_leave_calculation: 1,
      payable_status: 1,
      row_status: 1,
    },
  ];

  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(LeaveRuleEntity).clear();
    await dataSource.manager.save(LeaveRuleEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}
