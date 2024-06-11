import { DataSource } from "typeorm";
import { DisciplinaryActionsEntity } from "@lams/shared/database/entities/disciplinary-actions/disciplinary-actions.entity";
import { UserSeeder } from "@apps/seeder/seeds/user/user.seed";
import { OfficeOrganogramSeeder } from "@apps/seeder/seeds/office/office-organogram.seed";

export class DisciplinaryActionSeed {
  data: any[] = [
    {
      id: 1,
      case_no: 1,
      case_date: "2024-04-02 13:39:00",
      allegation_from_office_id: new UserSeeder()?.data[3]?.office_id || 1,
      allegation_from_desk_id: new OfficeOrganogramSeeder()?.data[9]?.id || 1,
      allegation_from_user_id: new UserSeeder()?.data[5]?.id || 1,
      allegation_to_office_id: new UserSeeder()?.data[3]?.office_id || 1,
      allegation_to_desk_id: new OfficeOrganogramSeeder()?.data[8]?.id || 1,
      allegation_to_user_id: new UserSeeder()?.data[3]?.id || 1,
      allegation_details: "test allegation details 1",
      investigation_note: "test investigation note 1",
      punishment_details: "test punishment details 1",
      allegation_type: 4,
      punishment_type: 1,
      punishment_sub_type: 3,
    },
    {
      id: 2,
      case_no: 2,
      case_date: "2024-04-03 13:39:00",
      allegation_from_office_id: new UserSeeder()?.data[3]?.office_id || 1,
      allegation_from_desk_id: new OfficeOrganogramSeeder()?.data[8]?.id || 1,
      allegation_from_user_id: new UserSeeder()?.data[3]?.id || 1,
      allegation_to_office_id: new UserSeeder()?.data[5]?.office_id || 1,
      allegation_to_desk_id: new OfficeOrganogramSeeder()?.data[9]?.id || 1,
      allegation_to_user_id: new UserSeeder()?.data[5]?.id || 1,
      allegation_details: "test allegation details 2",
      investigation_note: "test investigation note 2",
      punishment_details: "test punishment details 2",
      allegation_type: 5,
      punishment_type: 2,
      punishment_sub_type: 5,
    },
    {
      id: 3,
      case_no: 3,
      case_date: "2024-04-04 13:39:00",
      allegation_from_office_id: new UserSeeder()?.data[1]?.office_id || 1,
      allegation_from_desk_id: new OfficeOrganogramSeeder()?.data[8]?.id || 1,
      allegation_from_user_id: new UserSeeder()?.data[1]?.id || 1,
      allegation_to_office_id: new UserSeeder()?.data[2]?.office_id || 1,
      allegation_to_desk_id: new OfficeOrganogramSeeder()?.data[9]?.id || 1,
      allegation_to_user_id: new UserSeeder()?.data[2]?.id || 1,
      allegation_details: "test allegation details 3",
      investigation_note: "test investigation note 3",
      punishment_details: "test punishment details 3",
      allegation_type: 1,
      punishment_type: 2,
      punishment_sub_type: 6,
    },
    {
      id: 4,
      case_no: 4,
      case_date: "2024-04-05 13:39:00",
      allegation_from_office_id: new UserSeeder()?.data[1]?.office_id || 1,
      allegation_from_desk_id: new OfficeOrganogramSeeder()?.data[8]?.id || 1,
      allegation_from_user_id: new UserSeeder()?.data[1]?.id || 1,
      allegation_to_office_id: new UserSeeder()?.data[2]?.office_id || 1,
      allegation_to_desk_id: new OfficeOrganogramSeeder()?.data[9]?.id || 1,
      allegation_to_user_id: new UserSeeder()?.data[2]?.id || 1,
      allegation_details: "test allegation details 4",
      investigation_note: "test investigation note 4",
      punishment_details: "test punishment details 4",
      allegation_type: 1,
      punishment_type: 2,
      punishment_sub_type: 7,
      is_completed: 1,
    },
  ];

  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(DisciplinaryActionsEntity).clear();
    await dataSource.manager.save(DisciplinaryActionsEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}
