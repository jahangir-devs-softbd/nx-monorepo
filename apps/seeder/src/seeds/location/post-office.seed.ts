import { PostOfficeType } from "@lams/shared/utils/util/enums";
import { DataSource } from "typeorm";
import { PostOfficeEntity } from "@lams/shared/database/entities/location/post-office.entity";

export class PostOfficeSeeder {
  data: any[] = [
    {
      id: 1,
      name: "লোহাগাড়া পোস্ট অফিস",
      name_en: "LOHAGARA POST OFFICE",
      division_id: 8,
      district_id: 63,
      upazila_id: 1,
      postal_code: 4396,
      post_office_type: PostOfficeType.Extra_Departmental_Sub_Office,
    },
    {
      id: 2,
      name: "Hemayetpur",
      name_en: "Hemayetpur",
      division_id: 3,
      district_id: 40,
      upazila_id: 153,
      postal_code: 1340,
      post_office_type: PostOfficeType.Extra_Departmental_Branch_Office,
    },
  ];

  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(PostOfficeEntity).clear();
    await dataSource.manager.save(PostOfficeEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}
