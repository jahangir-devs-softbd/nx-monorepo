import { DataSource } from "typeorm";
import { GradeSeeder } from "@apps/seeder/seeds/user/grade.seed";
import { RankSeeder } from "@apps/seeder/seeds/user/rank.seed";
import { UserSeeder } from "@apps/seeder/seeds/user/user.seed";
import { EducationInstituteSeeder } from "@apps/seeder/seeds/user/education-institute.seed";
import { EducationDepartmentSeeder } from "@apps/seeder/seeds/user/education-department.seed";
import { EducationDegreeSeeder } from "@apps/seeder/seeds/user/education-degree.seed";

export class AllUserSeeder {
  async run(dataSource: DataSource): Promise<any> {
    await new GradeSeeder().run(dataSource);
    await new RankSeeder().run(dataSource);
    await new UserSeeder().run(dataSource);
    await new EducationDepartmentSeeder().run(dataSource);
    await new EducationDegreeSeeder().run(dataSource);
    await new EducationInstituteSeeder().run(dataSource);
  }
}
