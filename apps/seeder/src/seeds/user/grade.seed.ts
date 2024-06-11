import { GradeEntity } from "@lams/shared/database/entities/user/grade.entity";
import { DataSource } from "typeorm";

export class GradeSeeder {
  data: any[] = [
    {
      id: 1,
      name: "১ম গ্রেড",
      name_en: "1st grade",
      sort_order: 1,
      description: "Secretary / Chief Secretary",
    },
    {
      id: 2,
      name: "২য় গ্রেড",
      name_en: "2nd grade",
      sort_order: 2,
      description: "Additional Secretary/equivalent",
    },
    {
      id: 3,
      name: "৩য় গ্রেড",
      name_en: "3rd grade",
      sort_order: 3,
      description: "Joint Secretary/equivalent",
    },
    {
      id: 4,
      name: "৫ম গ্রেড",
      name_en: "5th grade",
      sort_order: 4,
      description: "Deputy Secretary/equivalent",
    },
    {
      id: 5,
      name: "৬ষ্ঠ গ্রেড",
      name_en: "6th grade",
      sort_order: 5,
      description: "Senior Assistant Secretary, Deputy Director",
    },
    {
      id: 6,
      name: "৯ম গ্রেড",
      name_en: "9th grade",
      sort_order: 6,
      description: "Assistant Secretary, Lecturer",
    },
    {
      id: 7,
      name: "১০ম গ্রেড",
      name_en: "10th grade",
      sort_order: 7,
      description: "Administrative Officer",
    },
    {
      id: 8,
      name: "১১ তম গ্রেড",
      name_en: "11th grade",
      sort_order: 8,
      description: "Estate Inspector",
    },
    {
      id: 9,
      name: "১২ তম গ্রেড",
      name_en: "12th grade",
      sort_order: 9,
      description: "Assistant Superintendent",
    },
    {
      id: 10,
      name: "১৩ তম গ্রেড",
      name_en: "13th grade",
      sort_order: 10,
      description: "Imam",
    },
  ];

  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(GradeEntity).clear();
    await dataSource.manager.save(GradeEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}
