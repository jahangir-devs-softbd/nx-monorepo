import { DataSource } from "typeorm";
import { LeaveTypeEntity } from "@lams/shared/database/entities/leave/leave-type.entity";
import { EarnedLeaveType } from "@lams/shared/utils/util/enums";

export class LeaveTypeSeeder {
  data: any[] = [
    {
      id: 1,
      name: "গড় বেতন অর্জিত ছুটি",
      name_en: "Full salary earned leave",
      leave_category_id: 4,
      earned_leave_type: EarnedLeaveType.FULL_PAY_LEAVE,
      row_status: 1,
    },
    {
      id: 2,
      name: "অর্ধ গড় বেতন অর্জিত ছুটি",
      name_en: "Half salary earned leave",
      leave_category_id: 4,
      earned_leave_type: EarnedLeaveType.HALF_PAY_LEAVE,
      row_status: 1,
    },
    {
      id: 3,
      name: "ঐচ্ছিক ছুটি",
      name_en: "Optional leave",
      leave_category_id: 3,
      row_status: 1,
    },
  ];

  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(LeaveTypeEntity).clear();
    await dataSource.manager.save(LeaveTypeEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}
