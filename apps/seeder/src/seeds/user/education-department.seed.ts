import { DataSource } from "typeorm";
import { EducationDepartmentEntity } from "@lams/shared/database/entities/user/education-department.entity";

export class EducationDepartmentSeeder {
  data: any[] = [
    {
      id: 1,
      name: "কম্পিউটার বিজ্ঞান",
      name_en: "Computer Science",
    },
    {
      id: 2,
      name: "বৈদ্যুতিক প্রকৌশলী",
      name_en: "Electrical Engineering",
    },
    {
      id: 3,
      name: "যন্ত্র প্রকৌশল",
      name_en: "Mechanical Engineering",
    },
    {
      id: 4,
      name: "সিভিল ইঞ্জিনিয়ারিং",
      name_en: "Civil Engineering",
    },
    {
      id: 5,
      name: "অংক",
      name_en: "Mathematics",
    },
    {
      id: 6,
      name: "পদার্থবিদ্যা",
      name_en: "Physics",
    },
    {
      id: 7,
      name: "জীববিদ্যা",
      name_en: "Biology",
    },
    {
      id: 8,
      name: "ব্যবসা প্রশাসন",
      name_en: "Business Administration",
    },
  ];

  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(EducationDepartmentEntity).clear();
    await dataSource.manager.save(EducationDepartmentEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}
