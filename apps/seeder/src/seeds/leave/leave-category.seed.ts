import { DataSource } from "typeorm";
import { LeaveCategoryEntity } from "@lams/shared/database/entities/leave/leave-category.entity";

export class LeaveCategorySeeder {
  data: any[] = [
    {
      id: 1,
      name: "নৈমিত্তিক ছুটি",
      name_en: "Casual leave",
      is_earned_leave: 0,
      row_status: 1,
    },
    {
      id: 2,
      name: "অধ্যয়ন ছুটি",
      name_en: "Study Leave",
      is_earned_leave: 0,
      row_status: 1,
    },
    {
      id: 3,
      name: "সরকারি ছুটি",
      name_en: "Government Leave",
      is_earned_leave: 0,
      row_status: 1,
    },
    {
      id: 4,
      name: "অর্জিত ছুটি",
      name_en: "Earned Leave",
      is_earned_leave: 1,
      row_status: 1,
    },
    {
      id: 5,
      name: "মাতৃত্বকালীন ছুটি",
      name_en: "Maternal Leave",
      is_earned_leave: 0,
      row_status: 1,
    },
  ];

  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(LeaveCategoryEntity).clear();
    await dataSource.manager.save(LeaveCategoryEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}
