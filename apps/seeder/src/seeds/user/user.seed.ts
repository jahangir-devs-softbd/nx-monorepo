import { UserEntity } from "@lams/shared/database/entities/user/user.entity";
import { DataSource } from "typeorm";

export class UserSeeder {
  data: any[] = [
    {
      id: 1,
      idp_desk_id: "167aa36f-ed95-47f3-ae31-3848c87c211b",
      user_type: 1,
      first_name: "Admin",
      first_name_en: "Admin",
      last_name: "LAMS",
      last_name_en: "LAMS",
      gender: 1,
      employee_code: "LAND0123664",
      date_of_birth: "1985-01-07",
      mobile: "01710000001",
      official_mobile: "",
      grade_id: 3,
      batch: 1,
      rank_id: 1,
      email: "admin@admin.com",
      service_id: 1,
      phone: "2364535",
      fax: null,
      nid: "1921537608",
      passport: "A456DNSKD",
      profile_picture: "bb3f39a0-58ff-452d-abdc-b5f3d16a42fa.png",
      signature_image: "2b8f2a7e-1c87-4c85-a376-aea49e6ba246.jpg",
      spouse_district_id: null,
      office_id: null,
      employment_type: 1,
      personnel_category: 1,
      freedom_fighter: 0,
      ethnic_group: 0,
      physically_disabled: 0,
      num_of_children: 0,
      old_id: 1,
      row_status: 1,
    },
    {
      id: 2,
      idp_desk_id: "bb791935-12ea-47bc-8579-b8c1a9ba761e",
      user_type: 1,
      first_name: "Dlrms",
      first_name_en: "Dlrms",
      last_name: "Admin",
      last_name_en: "Admin",
      gender: 1,
      employee_code: "LAND9257792",
      date_of_birth: "1962-12-30",
      mobile: "01710000005",
      official_mobile: "",
      grade_id: null,
      batch: 24,
      rank_id: null,
      email: "admin@dlrms.com",
      service_id: 2,
      phone: null,
      fax: null,
      nid: "1234567890",
      passport: null,
      profile_picture: null,
      signature_image: null,
      spouse_district_id: null,
      office_id: null,
      employment_type: 1,
      personnel_category: 1,
      freedom_fighter: 0,
      ethnic_group: 0,
      physically_disabled: 0,
      num_of_children: 0,
      old_id: null,
      row_status: 1,
    },
    {
      id: 3,
      idp_desk_id: "02cfde82-b20e-4b89-a14c-737ae1998638",
      user_type: 2,
      first_name: "মো: সাবিরুল",
      first_name_en: "Md. Sabirul",
      last_name: "ইসলাম",
      last_name_en: "Islam",
      gender: 1,
      employee_code: "LAND6119772",
      date_of_birth: "1968-12-12",
      mobile: "01713062404",
      official_mobile: "",
      grade_id: null,
      batch: null,
      rank_id: 9,
      email: "divcomdhaka@mopa.gov.bd",
      phone: null,
      fax: null,
      nid: "1234567890",
      passport: null,
      profile_picture: null,
      signature_image: null,
      spouse_district_id: null,
      office_id: 4,
      employment_type: 1,
      personnel_category: 1,
      freedom_fighter: 0,
      ethnic_group: 0,
      physically_disabled: 0,
      num_of_children: 0,
      old_id: null,
      row_status: 1,
    },
    {
      id: 4,
      idp_desk_id: "a15a2705-c393-4aca-a252-f83a93ebb9da",
      user_type: 2,
      first_name: "আবুল ফাতে মোহাম্মদ সফিকুল",
      first_name_en: "ABUL FATE MOHAMMAD SHAFIQUL",
      last_name: "ইসলাম",
      last_name_en: "Islam",
      gender: 1,
      employee_code: "LAND9234289",
      date_of_birth: "1975-12-12",
      mobile: "01700888333",
      official_mobile: "",
      grade_id: null,
      batch: null,
      rank_id: 12,
      email: "dcgazipur@mopa.gov.bd",
      phone: null,
      fax: null,
      nid: "1212123455",
      passport: null,
      profile_picture: null,
      signature_image: null,
      spouse_district_id: null,
      office_id: 5,
      employment_type: 1,
      personnel_category: 1,
      freedom_fighter: 0,
      ethnic_group: 0,
      physically_disabled: 0,
      num_of_children: 0,
      old_id: null,
      row_status: 1,
    },
    {
      id: 5,
      idp_desk_id: "c7060c22-3294-4ba5-93b0-8cc9516e1e8e",
      user_type: 2,
      first_name: "মোঃ আল",
      first_name_en: "Md. Al",
      last_name: "মামুন",
      last_name_en: "Mamun",
      gender: 1,
      employee_code: "LAND9832439",
      date_of_birth: "1983-12-12",
      mobile: "01783865893",
      official_mobile: "",
      grade_id: null,
      batch: 36,
      rank_id: 10,
      email: "aclandsreepur@gmail.com",
      phone: null,
      fax: null,
      nid: "3243234343",
      passport: null,
      profile_picture: null,
      signature_image: null,
      spouse_district_id: null,
      office_id: 6,
      employment_type: 1,
      personnel_category: 1,
      freedom_fighter: 0,
      ethnic_group: 0,
      physically_disabled: 0,
      num_of_children: 0,
      old_id: null,
      row_status: 1,
    },
    {
      id: 6,
      idp_desk_id: "5015a92c-3008-4ce6-b866-8d4400ba56e0",
      user_type: 2,
      first_name: "নারায়ন চন্দ্র",
      first_name_en: "Mr. Narayan Chandra",
      last_name: "চন্দ",
      last_name_en: "Chanda",
      gender: 1,
      employee_code: "LAND6179277",
      date_of_birth: "1950-12-12",
      mobile: "01500000001",
      official_mobile: "",
      grade_id: 1,
      batch: null,
      rank_id: 1,
      email: "minister@minland.gov.bd",
      nid: "1234567890",
      office_id: 1,
      passport: null,
      employment_type: "1",
      personnel_category: "1",
      created_by: 1,
      deleted_at: null,
      row_status: 1,
    },
  ];

  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(UserEntity).clear();
    await dataSource.manager.save(UserEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}
